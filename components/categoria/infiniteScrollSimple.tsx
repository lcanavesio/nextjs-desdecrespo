import { gql, useQuery } from '@apollo/client';
import {
  CircularProgress,
  CssBaseline,
  List,
  ListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Waypoint } from 'react-waypoint';
import FeaturedPost from '../post/FeaturedPost';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
}));

type Props = {
  path?: string
  location?: string
  categoryParams: string
}

const InfiniteScrollSimple = (props: Props) => {
  const {categoryParams} = props;
  const getPosts = gql`
    query getPosts($categoryName: String, $first: Int, $cursor: String) {
      posts(
        first: $first
        after: $cursor
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: $categoryName
        }
      ) {
        edges {
          cursor
          node {
            id
            date
            title
            slug
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;


  const {loading, error, data, fetchMore, networkStatus} = useQuery(
      getPosts,
      {
        variables: {
          categoryName: categoryParams,
          first: 10,
          cursor: null,
        },
      },
  );
  const edges = data?.posts?.edges || null;
  const classes = useStyles();

  if (loading) return <CircularProgress />;
  if (error) return null;
  if (!edges) return null;

  return (
    <section className={classes.container}>
      
      <CssBaseline />

      <List>
        {edges.map((x, i) => (
          <React.Fragment key={x.id}>
            <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
              <FeaturedPost key={x.id} post={x.node} />
            </ListItem>
            {i === edges.length - 2 && (
              //@ts-ignore
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: {
                      first: 5,
                      cursor: edges[edges.length - 1].cursor,
                    },
                    updateQuery: (pv, {fetchMoreResult}) => {
                      if (!fetchMoreResult) {
                        return pv;
                      }

                      return {
                        posts: {
                          edges: [
                            ...pv.posts.edges,
                            ...fetchMoreResult.posts.edges,
                          ],
                        },
                      };
                    },
                  });
                }}
              />
            )}
          </React.Fragment>
        ))}
        {networkStatus === 3 && <CircularProgress />}
      </List>
    </section>
  );
};
export default InfiniteScrollSimple;

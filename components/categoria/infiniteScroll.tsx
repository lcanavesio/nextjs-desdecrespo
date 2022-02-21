import {
  CircularProgress,
  CssBaseline,
  List,
  ListItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Waypoint } from "react-waypoint";
import { useGetPostForInfiiniteScrollQuery } from "../../graphql/types";
import { Category, Constants } from "../../utils/constants";
import PostCard from "../post/PostCard.";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
}));

type Props = {
  path?: string;
  location?: string;
  categoryParams?: string;
  cursor?: string;
};

const InfiniteScrollComponent = (props: Props) => {
  const { categoryParams, cursor } = props;

  const category: Category = Constants.CATEGORIES.find(
    (c) => c.url === (typeof window !== "undefined" ? location.pathname : "")
  );

  const { loading, error, data, fetchMore, networkStatus } =
    useGetPostForInfiiniteScrollQuery({
      variables: {
        categoryName: category ? category.databaseName : categoryParams,
        first: 10,
        cursor: cursor ? cursor : null,
      },
    });
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
          <>
            <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
              <PostCard
                category={category}
                post={{
                  id: x.node.id,
                  date: x.node.date,
                  title: x.node.title,
                  slug: x.node.slug,
                  content: x.node.content,
                  featuredImage: x.node.featuredImage,
                }}
              />
            </ListItem>
            {i === edges.length - 2 && (
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: {
                      first: 5,
                      cursor: edges[edges.length - 1].cursor,
                    },
                    updateQuery: (pv, { fetchMoreResult }) => {
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
          </>
        ))}
        {networkStatus === 3 && <CircularProgress />}
      </List>
    </section>
  );
};
export default InfiniteScrollComponent;

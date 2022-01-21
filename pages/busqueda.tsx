import { gql, useQuery } from "@apollo/client";
import {
  CssBaseline,
  GridList,
  GridListTile,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/layout/Layout";
import FeaturedPost from "../components/post/FeaturedPost";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
}));

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const getPostsSearch = gql`
  query getPostsSearch($keyword: String!) {
    posts(
      first: 10
      where: { search: $keyword, orderby: { field: DATE, order: DESC } }
    ) {
      edges {
        node {
          id
          date
          title
          slug
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

const BusquedaPage = (props: Props) => {
  const classes = useStyles();
  const router = useRouter();

  if (typeof window == "undefined") {
    return null;
  }

  const search: string = typeof window !== "undefined" ? location?.search : "";
  const keyword: string = new URLSearchParams(search).get("keyword");

  if (!keyword) router.push(`/`);

  const { loading, error, data } = useQuery(getPostsSearch, {
    variables: { keyword: keyword },
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (!posts) return null;
  return (
    <Layout>
      <section className={classes.container}>
        <CssBaseline />
        <GridList
          cellHeight={288}
          cols={2}
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          {posts.map((post) => (
            <GridListTile key={`gridList-${post.title}-${post?.title}`}>
              <FeaturedPost key={`${post.title}-${post?.title}`} post={post} />
            </GridListTile>
          ))}
        </GridList>
      </section>
    </Layout>
  );
};

export default BusquedaPage;

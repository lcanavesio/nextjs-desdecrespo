import { gql, useQuery } from "@apollo/client";
import {
  Button,
  CssBaseline,
  GridList,
  GridListTile,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/layout/Layout";
import FeaturedPost from "../components/post/FeaturedPost";
import { useGetPostsSearchQuery } from "../graphql/types";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },

  botones: {
    justifyContent: "flex-end",
    flexDirection: "row",
    display: "flex",
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

const BusquedaPage = () => {
  return (
    <Layout>
      <Busqueda />
    </Layout>
  );
};

const Busqueda = () => {
  const classes = useStyles();
  const router = useRouter();

  if (typeof window == "undefined") {
    return null;
  }

  const showSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <GridListTile>
          <Skeleton
            animation="wave"
            variant="rect"
            style={{ width: "100%", height: 200, padding: 5 }}
          />
       
        </GridListTile>
      );
    }
    return skeletons;
  };

  const search: string = typeof window !== "undefined" ? location?.search : "";
  const keyword: string = new URLSearchParams(search).get("keyword");

  if (!keyword) router.push(`/`);

  const { loading, error, data, refetch } = useGetPostsSearchQuery({
    variables: {
      keyword: keyword,
      first: 10,
      last: null,
      before: null,
      after: null,
    },
  });

  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;
 
  return (
    <>
      {!loading && posts ? (
        <div>
          <section className={classes.container}>
            <CssBaseline />
            <GridList
              cellHeight={288}
              cols={2}
              style={{ paddingLeft: 10, paddingRight: 10 }}
            >
              {posts.map((post) => (
                <GridListTile key={`gridList-${post.title}-${post?.title}`}>
                  <FeaturedPost
                    key={`${post.title}-${post?.title}`}
                    post={post}
                  />
                </GridListTile>
              ))}
            </GridList>
          </section>

          <div className={classes.botones}>
            {data.posts.pageInfo.hasPreviousPage ? (
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    refetch({
                      first: null,
                      after: null,
                      last: 10,
                      before: data?.posts?.pageInfo.startCursor || null,
                    });
                  }}
                >
                  Anterior
                </Button>
              </div>
            ) : null}
            {data.posts.pageInfo.hasNextPage ? (
              <div style={{ paddingLeft: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    refetch({
                      first: 10,
                      after: data?.posts?.pageInfo.endCursor || null,
                      last: null,
                      before: null,
                    });
                  }}
                >
                  Siguiente
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        showSkeleton()
      )}
    </>
  );
};

export default BusquedaPage;

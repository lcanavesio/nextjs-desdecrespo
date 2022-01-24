import { CssBaseline, makeStyles } from "@material-ui/core";
import SearchContent from "components/search/SearchContent";
import { getPostsSearch } from "lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout/Layout";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
}));

const BusquedaPage = ({ posts, pageInfo, keyword }) => {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  if (!posts) return null;
  return (
    <Layout>
      <section className={classes.container}>
        <CssBaseline />
        <SearchContent
          data={posts}
          keyword={keyword}
          pageInfo={pageInfo}
        />
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts, pageInfo } = await getPostsSearch(params.keyword);
  return {
    props: {
      posts,
      pageInfo,
      keyword: params.keyword,
    },
  };
};

export default BusquedaPage;

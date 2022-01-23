import { Skeleton } from "@material-ui/lab";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import IndividualPost from "../../components/post/IndividualPost";
import { getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    //@ts-ignore
    return <ErrorPage statusCode={404} />;
  }
  const url = "https://desdecrespo.com.ar/" + router.asPath;
  return (
    <>
      {router.isFallback ? (
        <>
          <Skeleton
            variant="text"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 170,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 500,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </>
      ) : (
        <>
          <article>
            <Head>
              <title>
              {CMS_NAME} | {post?.title}
              </title>
              <meta property="og:type" content="article" />
              <meta
                property="og:description"
                content={post?.title || CMS_NAME}
              />
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
              />
              <meta property="twitter:card" content="summary" />
              <meta name="twitter:site" content="@nytimesbits" />
              <meta property="og:url" content={url} />
              <meta
                property="twitter:title"
                content={post?.title || CMS_NAME}
              />
              <meta
                property="og:description"
                content={post?.title || CMS_NAME}
              />
              <meta property="og:title" content={post?.title || CMS_NAME} />
              <meta
                property="twitter:creator"
                content={post.author?.node?.name || ``}
              />
            </Head>

            <Layout>
              <IndividualPost data={post} />
            </Layout>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
    },
  };
}

export async function getStaticPaths() {
  //const allPosts = await getAllPostsWithSlug();

  return {
    paths: [], //allPosts.edges.map(({ node }) => `/post/${node.slug}`) || [],
    fallback: true,
  };
}

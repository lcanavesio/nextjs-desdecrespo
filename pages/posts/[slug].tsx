import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Tags from "../../components/tags";
import { Constants } from "../../utils/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    //@ts-ignore
    return <ErrorPage statusCode={404} />;
  }
  const url = "https://7359-190-193-20-68.ngrok.io" + router.asPath;
  return (
    <Layout preview={preview}>
      <Container>
        <Header sections={Constants.CATEGORIES} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta property="twitter:card" content="summary" />
                <meta name="twitter:site" content="@nytimesbits" />
                <meta property="og:url" content={url} />
                <meta
                  property="twitter:title"
                  content={post.title || CMS_NAME}
                />
                <meta
                  property="og:description"
                  content={post.title || CMS_NAME}
                />
                <meta property="og:title" content={post.title || CMS_NAME} />
                <meta
                  property="twitter:creator"
                  content={post.author?.node.name || ``}
                />

                <meta
                  property="og:image"
                  content={post?.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}

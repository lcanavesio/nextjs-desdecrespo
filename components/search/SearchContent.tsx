import { GridList, GridListTile } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import FeaturedPost from "components/post/FeaturedPost";
import { getPostsSearch } from "lib/api";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchContent = ({ data, keyword, pageInfo }) => {
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPosts(data);
    setCursor(pageInfo.endCursor);
    if (!data || data.length < 10) {
        setHasMore(false);
    }
  }, [pageInfo, data]);

  const getMorePost = async () => {
    const data = await getPostsSearch(keyword, cursor);
    setPosts((post) => [...post, ...data.posts]);
    setCursor(data.pageInfo.endCursor);
    setHasMore(data.pageInfo.hasNextPage);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Cargando...</h3>}
        endMessage={<Alert style={{margin: 10}} severity="warning">No hay más datos para mostrar</Alert>}
      >
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
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default SearchContent;

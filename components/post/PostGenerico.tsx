import { gql, useQuery } from "@apollo/client";
import { Grid, GridSize } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useGetPostsQuery } from "../../graphql/types";
import { useStylesGlobal } from "../../utils/GlobalStyle";
import HeaderTitle from "../common/headerTitle";
import FeaturedPost from "./FeaturedPost";

type Props = {
  titulo: string;
  categoryName: string;
  first: number;
};
const PostGenerico = (props: Props) => {
  const { categoryName, first, titulo } = props;
  const classesGlobal = useStylesGlobal();

  let gridValue: GridSize | boolean;
  switch (first) {
    case 1:
    case 2:
      gridValue = false;
      break;
    case 8:
    default:
      gridValue = 6;
      break;
    case 3:
    case 4:
      gridValue = 4;
      break;
  }

  const { loading, error, data } = useGetPostsQuery({
    variables: { categoryName, first },
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return null;

  const showSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < first; i++) {
      skeletons.push(
        <div>
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 200,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 30,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </div>
      );
    }
    return skeletons;
  };
      console.log("%%%%%%%%%%%%%", posts);
  return (
    <>
      <Grid container style={{ paddingLeft: 10, paddingRight: 10 }}>
        <HeaderTitle title={titulo} />
        {!loading && posts
          ? posts.map((post, index) => (
              <Grid
                style={{ paddingLeft: 10, paddingRight: 10, width: "100%" }}
                item
                key={index}
                lg={gridValue}
                className={classesGlobal.card}
              >
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))
          : showSkeleton()}
      </Grid>
    </>
  );
};

export default PostGenerico;

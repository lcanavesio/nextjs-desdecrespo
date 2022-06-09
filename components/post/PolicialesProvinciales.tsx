import { CircularProgress, Grid, useMediaQuery } from "@material-ui/core";
import { useGetPostsForCategoryQuery } from "graphql/types";
import React from "react";
import { useStylesGlobal } from "../../utils/GlobalStyle";
import HeaderTitle from "../common/headerTitle";
import FeaturedPost from "./FeaturedPost";

const PolicialesProvinciales = () => {
  const classesGlobal = useStylesGlobal();

  const { loading, error, data } = useGetPostsForCategoryQuery({
    variables: {
      first: 8,
      categoryName: "Policiales",
    },
  });

  const {
    loading: loadingProvinciales,
    error: errorProvinciales,
    data: dataProvinciales,
  } = useGetPostsForCategoryQuery({
    variables: {
      first: 8,
      categoryName: "Provinciales",
    },
  });
  const matches = useMediaQuery("(min-width:900px)");
  const postsPoliciales = data?.posts?.edges?.map((edge) => edge.node) || null;
  const postsProvinciales =
    dataProvinciales?.posts?.edges?.map((edge) => edge.node) || null;

  if (loading || loadingProvinciales) return <CircularProgress />;
  if (error || errorProvinciales) return null;
  if (!postsPoliciales || !postsProvinciales) return null;

  return (
    <>
      <Grid container className={classesGlobal.container} key="firstgrid">
        <Grid
          item
          lg={6}
          key="policiales"
          style={{ paddingLeft: 10, paddingRight: 20 }}
        >
          <HeaderTitle title="POLICIALES" />
          <Grid container>
            {postsPoliciales.map((post, index) => (
              <Grid
                item
                key={index}
                lg={6}
                className={classesGlobal.card}
                style={{ minWidth: "100%" }}
              >
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {!matches && (
          <img
            src={process.env.NEXT_PUBLIC_PUBLICIDAD4}
            style={{ textAlign: "center", width: "100%" }}
          />
        )}
        <Grid
          item
          lg={6}
          key="provinciales"
          style={{ paddingLeft: 10, paddingRight: 20 }}
        >
          <HeaderTitle title="PROVINCIALES" />
          <Grid container>
            {postsProvinciales.map((post, index) => (
              <Grid
                key={index}
                item
                lg={6}
                className={classesGlobal.card}
                style={{ minWidth: "100%" }}
              >
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PolicialesProvinciales;

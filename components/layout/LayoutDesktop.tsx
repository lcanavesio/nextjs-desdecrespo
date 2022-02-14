import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import React, { memo } from "react";
import TabFourPosts from "../../components/post//TabFourPosts";
import NoSePierda from "../../components/post/NoSePierda";
import PolicialesProvinciales from "../../components/post/PolicialesProvinciales";
import PostGenerico from "../../components/post/PostGenerico";
import SlidePosts from "../../components/post/SlidePosts";
import {
  PublicidadGenerico,
  PublicidadPrincipal
} from "../../utils/Publicidad";
import Layout from "./Layout";
import RightColumn from "./RightColumn";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    minWidth: "100%",
  },
  advertisingContainer: {
    width: "100%",
    textAlign: "center",
  },
}));

const LayoutDesktop = () => {
  const classes = useStyles();
  return (
    <Layout>
      <h1 style={{ display: "none" }}>Desde crespo</h1>
      <section className={classes.container}>
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid lg={9}>
            <Grid container lg={12}>
              <Grid item lg={12}>
                <SlidePosts />
              </Grid>
            </Grid>
            <PostGenerico
              key="postgenerico1"
              categoryName="locales"
              first={8}
              titulo="Crespo"
            />

            <PublicidadGenerico
              key="publicidad1"
              href={process.env.NEXT_PUBLIC_PUBLICIDAD1}
            />

            <TabFourPosts />
            <PublicidadPrincipal key={"publicidadprincipal1"} />
            <div
              className={classes.advertisingContainer}
              style={{ marginLeft: -5, marginRight: -5 }}
            >
              <PublicidadGenerico
                key="NEXT_PUBLIC_PUBLICIDAD6"
                href={process.env.NEXT_PUBLIC_PUBLICIDAD6}
              />
            </div>
          </Grid>
          <Grid lg={3} className={classes.rightColumn}>
            <RightColumn />
          </Grid>
          <PolicialesProvinciales key="policialesprovinciales" />
          <PostGenerico
            key="postgenerico5"
            categoryName="Nacionales"
            first={3}
            titulo="NACIONALES"
          />

          <PostGenerico
            key="postgenerico6"
            categoryName="Internacionales"
            first={3}
            titulo="INTERNACIONALES"
          />

          <PostGenerico
            key="postgenerico7"
            categoryName="Deportes"
            first={3}
            titulo="DEPORTES"
          />

          <NoSePierda key="nosepierda" />
        </Grid>
      </section>
    </Layout>
  );
};

export default memo(LayoutDesktop);

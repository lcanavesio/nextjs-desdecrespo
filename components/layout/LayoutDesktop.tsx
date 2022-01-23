import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React, { memo } from "react";
import ClicMe from "../../components/inmobiliaria/ClicMe";
import TabFourPosts from "../../components/post//TabFourPosts";
import NoSePierda from "../../components/post/NoSePierda";
import PolicialesProvinciales from "../../components/post/PolicialesProvinciales";
import PostGenerico from "../../components/post/PostGenerico";
import SlidePosts from "../../components/post/SlidePosts";
import TV from "../../components/tv/TV";
import Wather from "../../components/Wather";
import {
  PublicidadGenerico,
  PublicidadPrincipal,
} from "../../utils/Publicidad";
import Layout from "./Layout";
import PostsRecientes from "../post/PostsRecientes";
import Radio from "../radio/radio";
import SocialFlow from "../social/SocialFollow";
import { getSecondPartPublicidad } from "utils/constants";

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
              first={3}
              titulo="Locales"
            />

            <PublicidadGenerico
              key="publicidad1"
              href={process.env.NEXT_PUBLIC_PUBLICIDAD1}
            />

            <TabFourPosts />
            <PublicidadPrincipal key={"publicidadprincipal1"} />
            <PostGenerico
              key="postgenerico3"
              categoryName="locales"
              first={6}
              titulo="Crespo"
            />
            <div className={classes.advertisingContainer} style={{ marginLeft: -5, marginRight: -5 }}>
              <PublicidadGenerico
                key="NEXT_PUBLIC_PUBLICIDAD6"
                href={process.env.NEXT_PUBLIC_PUBLICIDAD6}
              />
            </div>

          </Grid>
          <Grid lg={3} className={classes.rightColumn}>
            <TV />
            <Wather />
            <Radio />
            <ClicMe />
            <SocialFlow />

            <div className={classes.advertisingContainer}>
              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD8}
                alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD8)}
                width={320}
                height={120}
                loading="lazy"
              />
            </div>
            <PostsRecientes />

            <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD5}
                alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD5)}
                width={321}
                height={200}
                loading="lazy"
              />
            </Grid>

            <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
              <PostGenerico
                key="postgenerico8"
                categoryName="Rurales"
                first={1}
                titulo="Rurales"
              />
            </Grid>
            <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD7}
                alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD7)}
                width={321}
                height={200}
                loading="lazy"
              />

              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD9}
                alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD9)}
                width={321}
                height={200}
                loading="lazy"
              />

              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD10}
                alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD10)}
                width={321}
                height={200}
                loading="lazy"
              />
        
            </Grid>
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

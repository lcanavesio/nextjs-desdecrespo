import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React, { memo } from "react";
import { getSecondPartPublicidad } from "utils/constants";
import ClicMe from "../../components/inmobiliaria/ClicMe";
import TabFourPosts from "../../components/post//TabFourPosts";
import NoSePierda from "../../components/post/NoSePierda";
import PolicialesProvinciales from "../../components/post/PolicialesProvinciales";
import PostGenerico from "../../components/post/PostGenerico";
import SlidePosts from "../../components/post/SlidePosts";
import Wather from "../../components/Wather";
import PostsRecientes from "../post/PostsRecientes";
import SocialFollow from "../social/SocialFollow";
import Layout from "./Layout";

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
  advertisingContainer: {
    width: "100%",
    textAlign: "center",
  },
  image: {
    display: "block",
    minWidth: "100%",
  },
}));

const LayoutMobile = () => {
  const classes = useStyles();
  return (
    <Layout>
      <section className={classes.container}>
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid item lg={12}>
            <Grid item lg={12}>
              <SlidePosts />
            </Grid>
          </Grid>

          <div
            className={classes.advertisingContainer}
            style={{
              width: 414,
              height: 45,
              position: "relative",
            }}
          >
            <Image
              src={process.env.NEXT_PUBLIC_PUBLICIDAD1}
              alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD1)}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <PostGenerico
            key="postgenerico1"
            categoryName="locales"
            first={8}
            titulo="Crespo"
          />
          <Grid container lg={12} style={{padding: 10}}>
            <img
              style={{ width: "100%" }}
              src={process.env.NEXT_PUBLIC_LIBRO_IMAGEN}
              alt={getSecondPartPublicidad(
                process.env.NEXT_PUBLIC_LIBRO_IMAGEN
              )}
            />
          </Grid>
          <Wather />
          <Grid container lg={12} style={{padding: 10}}>
            <img
              style={{ width: "100%" }}
              src={process.env.NEXT_PUBLIC_DIARIO_IMAGEN}
              alt={getSecondPartPublicidad(
                process.env.NEXT_PUBLIC_DIARIO_IMAGEN
              )}
            />
          </Grid>
          <TabFourPosts key="TabFourPosts" />
          <div className={classes.advertisingContainer}>
            <Image
              src={process.env.NEXT_PUBLIC_PUBLICIDAD2}
              alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD2)}
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <PostsRecientes />
          <Grid container lg={12} style={{padding: 10}}>
            <img
              style={{ width: "100%" }}
              src={process.env.NEXT_PUBLIC_PORTADA_IMAGEN}
              alt={getSecondPartPublicidad(
                process.env.NEXT_PUBLIC_PORTADA_IMAGEN
              )}
            />
          </Grid>
          <ClicMe />

          <div className={classes.advertisingContainer}>
            <a
              href="https://www.facebook.com/FernandoAHuck/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD8}
                alt={getSecondPartPublicidad(
                  process.env.NEXT_PUBLIC_PUBLICIDAD8
                )}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </a>
          </div>

          <SocialFollow />
          <div className={classes.advertisingContainer}>
            <a
              href="https://api.whatsapp.com/send?phone=5493434808579"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={classes.image}
                src={process.env.NEXT_PUBLIC_PUBLICIDAD3}
                alt={getSecondPartPublicidad(
                  process.env.NEXT_PUBLIC_PUBLICIDAD3
                )}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </a>
          </div>
          <PolicialesProvinciales key="policialesprovinciales" />
          <div className={classes.advertisingContainer}>
            <Image
              className={classes.image}
              src={process.env.NEXT_PUBLIC_PUBLICIDAD5}
              alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD5)}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <PostGenerico
            key="postgenerico8"
            categoryName="Rurales"
            first={1}
            titulo="Rurales"
          />
          <div className={classes.advertisingContainer}>
            <Image
              className={classes.image}
              src={process.env.NEXT_PUBLIC_PUBLICIDAD7}
              alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD7)}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <PostGenerico
            key="postgenerico5"
            categoryName="Nacionales"
            first={3}
            titulo="NACIONALES"
          />

          <PostGenerico
            key="postgenerico6"
            categoryName="Internacionales"
            first={2}
            titulo="INTERNACIONALES"
          />
          <div className={classes.advertisingContainer}>
            <Image
              className={classes.image}
              src={process.env.NEXT_PUBLIC_PUBLICIDAD9}
              alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD9)}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </div>
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

export default memo(LayoutMobile);

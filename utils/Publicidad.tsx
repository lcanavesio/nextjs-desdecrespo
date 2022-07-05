import { Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { getSecondPartPublicidad } from "./constants";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  advertisingContainer: {
    width: "100%",
    textAlign: "center",
  },
}));

export const PublicidadPrincipal = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={4} className={classes.card}>
        <a
          href={process.env.NEXT_PUBLIC_PUBLICIDAD2}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={process.env.NEXT_PUBLIC_PUBLICIDAD2}
            alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD2)}
            width={310}
            height={240}
            loading="lazy"
          />
        </a>
      </Grid>
      <Grid item lg={4} className={classes.card}>
        <a
          href="https://api.whatsapp.com/send?phone=5493434808579"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={process.env.NEXT_PUBLIC_PUBLICIDAD3}
            alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD3)}
            width={300}
            height={268}
            loading="lazy"
          />
        </a>
      </Grid>
      <Grid item lg={4} className={classes.card}>
        <a
          href={process.env.NEXT_PUBLIC_PUBLICIDAD11}
          target="_blank"
          rel="noreferrer"
        >
          <Grid container>
            <Grid item lg={12} className={classes.card}>
              <img
                src={process.env.NEXT_PUBLIC_PUBLICIDAD11}
                className={classes.advertisingContainer}
                alt={getSecondPartPublicidad(
                  process.env.NEXT_PUBLIC_PUBLICIDAD11
                )}
                loading="lazy"
                width={300}
                height={268}
              />
            </Grid>
          </Grid>
        </a>
      </Grid>
      <Grid item lg={8} className={classes.card}>
        <img
          src={process.env.NEXT_PUBLIC_PORTADA_IMAGEN}
          className={classes.advertisingContainer}
          alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PORTADA_IMAGEN)}
          loading="lazy"
        />
      </Grid>
      <Grid item lg={4} className={classes.card}>
        <CustomCarouselChangoMas />
      </Grid>
    </Grid>
  );
};

type PublicidadGenerico = { href: string };

// eslint-disable-next-line no-unused-vars
export const PublicidadGenerico = (props: PublicidadGenerico) => {
  const { href } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={12} className={classes.card}>
        <img
          src={href}
          className={classes.advertisingContainer}
          alt={getSecondPartPublicidad(href)}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};

//FIXME Public from 06/07/2022 to 17/07/2022

//NOTE This is a custom carousel for the Chango Mas
const CustomCarouselChangoMas = () => {
  const images = [];
  // for (let i = 1; i <= 4; i++) {
  //   images.push(process.env.NEXT_PUBLIC_CHANGO + `${i}`);
  // }

  images.push(
    process.env.NEXT_PUBLIC_CHANGO1,
    process.env.NEXT_PUBLIC_CHANGO2,
    process.env.NEXT_PUBLIC_CHANGO3,
    process.env.NEXT_PUBLIC_CHANGO4
  );

  return (
    //@ts-ignore
    <Carousel animation={"slide"} interval={9000}>
      {images.map((item, index) => (
        <div key={index}>
          <a
            href="https://www.changomas.com.ar/"
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ cursor: "pointer" }}>
              <img src={item} alt={item} />
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  );
};

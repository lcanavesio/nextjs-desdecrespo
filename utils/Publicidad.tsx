import { Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
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
          href={process.env.NEXT_PUBLIC_PUBLICIDAD4}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={process.env.NEXT_PUBLIC_PUBLICIDAD4}
            alt={getSecondPartPublicidad(process.env.NEXT_PUBLIC_PUBLICIDAD4)}
            width={300}
            height={268}
            loading="lazy"
          />
        </a>
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
        />
      </Grid>
    </Grid>
  );
};

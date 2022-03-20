import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { getSecondPartPublicidad } from "utils/constants";
import ClicMe from "../../components/inmobiliaria/ClicMe";
import PostGenerico from "../../components/post/PostGenerico";
import TV from "../../components/tv/TV";
import Wather from "../../components/Wather";
import PostsRecientes from "../post/PostsRecientes";
import Radio from "../radio/radio";
import SocialFlow from "../social/SocialFollow";

const useStyles = makeStyles((theme) => ({
  advertisingContainer: {
    width: "100%",
    textAlign: "center",
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    minWidth: "100%",
  },
}));

export default function RightColumn() {
  const classes = useStyles();
  return (
    <>
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

      <Grid item lg={12} style={{ marginRight: -10 }}>
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
        {//NOTE QUITAR 28 DE MARZO DE 2022
        }
        <img
          className={classes.image}
          src="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
          alt="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
          width={321}
          height={400}
          loading="lazy"
        />
        
      </Grid>
    </>
  );
}

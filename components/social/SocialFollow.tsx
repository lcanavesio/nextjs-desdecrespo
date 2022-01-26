import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HeaderTitle from "../common/headerTitle";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 40, 
    height: 40,
  }
}));

export default function SocialFollow() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HeaderTitle title="Seguinos en" />
      <Grid item md={3}>
        <a
          href="https://www.youtube.com/channel/UCgj6Vesuxfr_fVEp-rG5sxQ"
          className="youtube social"
          target="_blank"
          rel="noreferrer"
        >
           <FontAwesomeIcon icon={faYoutube} size="1x" className={classes.icon}/>YouTube
        </a>
      </Grid>
      <Grid item md={3}>
        <a
          href="https://www.facebook.com/entreriostv/"
          className="facebook social"
          target="_blank"
          rel="noreferrer"
        >
           <FontAwesomeIcon icon={faFacebook} size="1x" className={classes.icon}/> Facebook
        </a>
      </Grid>
      <Grid item md={3}>
        <a
          href="https://www.instagram.com/canal6.ertv/"
          className="instagram social"
          target="_blank"
          rel="noreferrer"
        >
           <FontAwesomeIcon icon={faInstagram} size="1x" className={classes.icon}/> Instagram
        </a>
      </Grid>
      <Grid item md={3}>
        <a
          href="https://twitter.com/canal6ertv"
          className="twitter social"
          target="_blank"
          rel="noreferrer"
        >
           <FontAwesomeIcon icon={faTwitter} size="1x" className={classes.icon}/> Twitter
        </a>
      </Grid>
    </Grid>
  );
}

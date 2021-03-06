import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Skeleton } from "@material-ui/lab";
import Link from "next/link";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useGetPostForUltimoQuery } from "../../graphql/types";
const useStyles = makeStyles((theme) => ({
  carousel: {
    marginLeft: 10,
    marginRight: 10,
    width: "90%",
    height: 30,
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "bold",
  },
  carouselMobile: {
    marginLeft: 10,
    marginRight: 10,
    width: "70%",
    height: 50,
    textAlign: "center",
    paddingTop: 5,
  },
  image: {
    position: "relative",
    height: 436,
    width: "100%",
    objectFit: "cover",
    margin: 0,
    borderRadius: 5,
  },
  postTitle: {
    position: "absolute",
    top: "80%",
    left: "5%",
    fontSize: 26,
    fontWeight: 600,
  },
  titleText: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    color: "black"
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  mobileItem: {
    display: "flex",
    textAlign: "center",
  },
  mobileTitle: {
    fontSize: "12px",
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    paddingTop: 5,
  },
}));

const Ultimo = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1032px)");

  const { loading, error, data } = useGetPostForUltimoQuery();
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return null;

  return (
    <>
      {matches ? (
        <Grid
          container
          direction="row"
          style={{ width: "90%", maxWidth: 1700 }}
          justifyContent="center"
          alignItems="center"
        >
          <FlashOnIcon style={{ color: "red" }} />
          <h5 placeholder="">LO ??LTIMO</h5>
          {posts ? (
            //@ts-ignore
            <Carousel
              key="carousel-desktop"
              className={classes.carousel}
              indicators={false}
              navButtonsAlwaysVisible={true}
              animation={"slide"}
              interval={7000}
              navButtonsProps={{
                style: {
                  height: 5,
                  width: 5,
                  marginTop: 7,
                  textAlign: "right",
                },
              }}
            >
              {posts.map((post, index) => (
                <a
                  target="_blank"
                  href={`/post/${post.slug}`}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className={classes.titleText}
                >
                  <Link key={index} href={`/post/${post.slug}`}>
                    <span className={classes.titleText}>{post.title}</span>
                  </Link>
                </a>
              ))}
            </Carousel>
          ) : (
            <Skeleton variant="rect" className={classes.carousel} />
          )}
        </Grid>
      ) : (
        <div style={{ width: "100%", display: "-webkit-inline-box" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <FlashOnIcon style={{ color: "red" }} />
            {posts ? (
              //@ts-ignore
              <Carousel
                key="carousel-mobile"
                className={classes.carouselMobile}
                indicators={false}
                navButtonsAlwaysVisible={false}
                animation={"slide"}
                interval={5000}
              >
                {posts.map((post, index) => (
                  <a
                    target="_blank"
                    href={`/post/${post.slug}`}
                    rel="noopener noreferrer"
                    className={classes.titleText}
                    style={{ textDecoration: "none" }}
                  >
                    <Link key={index} href={`/post/${post.slug}`}>
                      <span className={classes.titleText}>{post.title}</span>
                    </Link>
                  </a>
                ))}
              </Carousel>
            ) : (
              <Skeleton variant="rect" className={classes.carousel} />
            )}
            <Grid key="envivo">
              <Button
                variant="contained"
                size="small"
                style={{ color: "white", background: "red" }}
              >
                <a
                  target="_blank"
                  href="/live"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Link href="/live">
                    <div>
                      <Typography component="p" variant="body2" style={{color: 'white'}}>
                        <Brightness1Icon
                          style={{                            
                            width: 8,
                            height: 8,
                          }}
                        />{" "}
                        vivo
                      </Typography>
                    </div>
                  </Link>
                </a>
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
export default Ultimo;

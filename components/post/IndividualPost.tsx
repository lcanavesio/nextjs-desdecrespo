import {
  CssBaseline,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { getSecondPartPublicidad } from "utils/constants";
import DateComponent from "../../utils/dateFormater";
import Breadcrumb from "../breadcrumb/breadcrumb";
import InfiniteScrollComponent from "../categoria/infiniteScroll";
import InfiniteScrollSimple from "../categoria/infiniteScrollSimple";
import HeaderTitle from "../common/headerTitle";
import PostsRecientes from "./PostsRecientes";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    //position: "relative",
    objectFit: "cover",
    margin: 0,
    borderRadius: 5,
    maxWidth: "100%",
  },
  imageNext: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    minWidth: "100%",
  },
  "@global": {
    "#divContent img": {
      width: "100%",
      height: "100%",
    },
    "#divContent video": {
      width: "100%",
      height: "100%",
    },
    // eslint-disable-next-line max-len
    ".the_champ_sharing_container.the_champ_vertical_sharing.the_champ_hide_sharing.the_champ_bottom_sharing":
      {
        display: "none",
      },
  },
}));

type Props = {
  data: any;
};

const IndividualPost = (props: Props) => {
  const { data } = props;

  const matches = useMediaQuery("(max-width:1279px)");

  const locationHref: String =
    typeof window !== "undefined"
      ? location.href.replace(
          "http://localhost:3000/",
          "https://desdecrespo.com.ar/"
        )
      : "";

  const category = data?.categories.edges?.map((edge) => edge.node) || null;
  const classes = useStyles();
  return (
    <>
      <section className={classes.container}>
        <CssBaseline />
        <Grid container className={classes.container}>
          {!matches ? (
            <>
              <Grid lg={9}>
                <Grid container>
                  <Grid item lg={11} style={{ maxWidth: "100%" }}>
                    <Breadcrumb category={category[0].name} />

                    <>
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        style={{
                          paddingTop: 20,
                          fontSize: "40px",
                          color: "#1f1f1f",
                          lineHeight: "1",
                          display: "block",
                          fontFamily: "Libre Franklin,sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        {data?.title}
                      </Typography>

                      <img
                        src={data?.featuredImage?.node?.sourceUrl}
                        alt={data?.title}
                        style={{ width: "100%", height: "auto" }}
                        className={classes.image}
                        loading="lazy"
                      />
                      <div className="mb-6 text-lg">
                        Publicado el: {data?.date && DateComponent(data?.date)}
                      </div>
                      <div
                        id="divContent"
                        style={{
                          width: "100%",
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data?.content,
                        }}
                      />
                      <iframe
                        title="content-post"
                        src={`https://www.facebook.com/plugins/comments.php?href=${locationHref}`}
                        scrolling="no"
                        frameBorder="0"
                        style={{
                          border: "none",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: 300,
                          height: "100%",
                        }}
                      ></iframe>
                    </>
                  </Grid>
                  <HeaderTitle title="ÚLTIMAS NOTICIAS" />
                  <Grid item lg={11}>
                    <InfiniteScrollComponent
                      categoryParams={"Locales, Policiales, Nacionales"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={3} className={classes.rightColumn}>
                <PostsRecientes />
                <HeaderTitle title="PUBLICITE AQUÍ" />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD5}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD5
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD2}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD2
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD4}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD4
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD7}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD7
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD8}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD8
                  )}
                  className={classes.image}
                />
                {
                  //NOTE QUITAR 28 DE MARZO DE 2022
                }
                <img
                  className={classes.imageNext}
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
                  alt="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
                  width={321}
                  height={400}
                  loading="lazy"
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD9}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD9
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD10}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD10
                  )}
                  className={classes.image}
                />

                <HeaderTitle title="NO SE PIERDA" />
                <InfiniteScrollSimple
                  categoryParams={
                    "Espectáculos, Sociales, Rurales,  Internacionales"
                  }
                />
              </Grid>
            </>
          ) : (
            <Grid container>
              <Grid item lg={11} style={{ maxWidth: "100%" }}>
                <Breadcrumb category={category[0].name} />

                <>
                  <Typography
                    component="h1"
                    variant="h2"
                    color="inherit"
                    gutterBottom
                    style={{
                      paddingTop: 10,
                      fontSize: "28px",
                      color: "#1f1f1f",
                      lineHeight: "1",
                      display: "block",
                      fontFamily: "Libre Franklin,sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {data?.title}
                  </Typography>
                  <img
                    src={data?.featuredImage?.node?.sourceUrl}
                    alt={data?.title}
                    style={{ width: "100%", height: "auto" }}
                    className={classes.image}
                    loading="lazy"
                  />
                  <div className="mb-6 text-lg">
                    Publicado el: {data?.date && DateComponent(data?.date)}
                  </div>

                  <div
                    id="divContent"
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: data?.content,
                    }}
                  />
                  <iframe
                    title="content-post"
                    src={`https://www.facebook.com/plugins/comments.php?href=${locationHref}`}
                    scrolling="no"
                    frameBorder="0"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      width: "100%",
                      minHeight: 300,
                      height: "100%",
                    }}
                  ></iframe>
                </>
              </Grid>
              <Grid item lg={11}>
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD8}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD8
                  )}
                  className={classes.image}
                />
                <PostsRecientes />
                <HeaderTitle title="PUBLICITE AQUÍ" />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD5}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD5
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD2}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD2
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD4}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD4
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD7}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD7
                  )}
                  className={classes.image}
                />
                {
                  //NOTE QUITAR 28 DE MARZO DE 2022
                }
                <img
                  className={classes.imageNext}
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
                  alt="https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/remate.jpg"
                  width={321}
                  height={400}
                  loading="lazy"
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD9}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD9
                  )}
                  className={classes.image}
                />
                <img
                  src={process.env.NEXT_PUBLIC_PUBLICIDAD10}
                  alt={getSecondPartPublicidad(
                    process.env.NEXT_PUBLIC_PUBLICIDAD10
                  )}
                  className={classes.image}
                />

                <HeaderTitle title="NO SE PIERDA" />
                <InfiniteScrollSimple
                  categoryParams={
                    "Espectáculos, Locales, Rurales, Nacionales, Internacionales"
                  }
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </section>
    </>
  );
};
export default IndividualPost;

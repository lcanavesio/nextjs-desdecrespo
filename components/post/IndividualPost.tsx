import {
  CssBaseline,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "material-ui-image";
import React from "react";
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
    position: "relative",
    objectFit: "cover",
    margin: 0,
    borderRadius: 5,
    paddingBottom: 20,
    maxWidth: "100%",
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
  // const query: any = queryString.parse(location.search);
  const locationHref: String =
    typeof window !== "undefined"
      ? location.href.replace(
          "http://localhost:3000/",
          "https://desdecrespo.com.ar/"
        )
      : "";

  // const {loading, error, data} = useQuery(postBy, {
  //   variables: {slug},
  // });
  const category = data?.categories.edges?.map((edge) => edge.node) || null;
  const classes = useStyles();
  console.log("category", category);
  return (
    <>
      <section className={classes.container}>
        {/* <SEO title="Inicio" /> */}
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

                      <Image
                        src={data?.featuredImage?.node?.sourceUrl}
                        alt={data?.title}
                        aspectRatio={2}
                        disableSpinner={false}
                        cover={true}
                        className={classes.image}
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
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD5} />
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD2} />
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD4} />
                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                  className={classes.image}
                />
                <img
                  src=" https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                  className={classes.image}
                />
                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                  className={classes.image}
                />
                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                  className={classes.image}
                />
                <a
                  href="http://galarza.gov.ar/licitaciones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={process.env.NEXT_PUBLIC_PUBLICIDAD7} />
                </a>
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
                <Breadcrumb category={category} label={""} />

                <>
                  <Typography
                    component="h1"
                    variant="h2"
                    color="inherit"
                    gutterBottom
                    style={{
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
                  <Image
                    src={data?.featuredImage?.node?.sourceUrl}
                    alt={data?.title}
                    aspectRatio={2}
                    disableSpinner={false}
                    cover={true}
                    className={classes.image}
                  />
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
                  src=" https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                  className={classes.image}
                />
                <PostsRecientes />
                <HeaderTitle title="PUBLICITE AQUÍ" />
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD5} />
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD2} />
                <img src={process.env.NEXT_PUBLIC_PUBLICIDAD4} />
                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                  className={classes.image}
                />

                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                  className={classes.image}
                />
                <img
                  src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                  className={classes.image}
                />
                <a
                  href="http://galarza.gov.ar/licitaciones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={process.env.NEXT_PUBLIC_PUBLICIDAD7} />
                </a>
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

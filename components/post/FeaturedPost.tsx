import { useMediaQuery } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LazyCardMedia from "../../utils/LazyCardMedia";

const useStyles = makeStyles((theme) => ({
  post: {
    position: "relative",
  },
  card: {
    height: "100%",
    "&:hover": {
      "& $cardMedia": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
    },
  },
  cardMedia: {
    transition: "0.3s",
    height: 200,
    margin: 0,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 21,
    fontWeight: 700,
    height: "100%",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  link: {
    display: "flex",
    color: "#5c5c5c",
    textDecoration: "none",
    cursor: "pointer",
  },
}));

type Post = {
  id: string;
  date: string;
  title: string;
  slug: string;
  featuredImage: any;
};

type Props = {
  post: any;
};

export default function FeaturedPost(props: Props) {
  const { post } = props;
  const classes = useStyles();
  const router = useRouter();

  const matches = useMediaQuery("(min-width:1032px)");
  return (
    <a target="_blank" href={`/post/${post.slug}`} rel="noopener noreferrer" className={classes.link}>
      <Link href={`/post/${post.slug}`}>
        <Card
          key={post?.id}
          className={classes.card}
          style={{ minWidth: "100%" }}
        >
          <CardActionArea
            onClick={() => router.push(`/post/[slug]`, `/post/${post.slug}`)}
            style={{ minWidth: "100%" }}
          >
            <LazyCardMedia
              className={classes.cardMedia}
              component="img"
              alt={post?.title}
              image={post?.featuredImage?.node?.mediaItemUrl}
              title={post?.title}
            />
            <CardContent
              onClick={() => router.push(`/post/[slug]`, `/post/${post.slug}`)}
              style={{ minWidth: "100%", minHeight: matches ? "100%" : 95 }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {post?.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </a>
  );
}

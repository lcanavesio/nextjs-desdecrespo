import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { useGetPostRecientesQuery } from "graphql/types";
import Link from "next/link";
import React from "react";
import HeaderTitle from "../common/headerTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  link: {
    color: "#5c5c5c",
    textDecoration: "none",
  },
}));

export default function PostsRecientes() {
  const classes = useStyles();

  const { loading, error, data } = useGetPostRecientesQuery();

  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return null;

  const showSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <div>
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 200,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 30,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </div>
      );
    }
    return skeletons;
  };

  return (
    <>
      <HeaderTitle title="Recientes" />
      <List className={classes.root}>
        {!loading && posts
          ? posts.map((post, index) => (
              <>
                <a
                  target="_blank"
                  href={`/post/${post.slug}`}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Link href={`/post/${post.slug}`}>
                    <ListItem
                      alignItems="flex-start"
                      style={{ width: "100%", cursor: "pointer" }}
                      key={index}
                      className={classes.link}
                    >
                      <ListItemAvatar key={index}>
                        <Avatar
                          alt="locales"
                          style={{ display: "flow-root" }}
                          src={
                            post ? post?.featuredImage?.node?.mediaItemUrl : ""
                          }
                          key={index}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={post ? post?.title : ""}
                        key={index}
                      />
                    </ListItem>
                  </Link>
                </a>
                <Divider variant="inset" component="li" key={index} />
              </>
            ))
          : showSkeleton()}
      </List>
    </>
  );
}

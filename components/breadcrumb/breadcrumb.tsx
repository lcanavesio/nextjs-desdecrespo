import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { default as SvgIcon } from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Link from "next/link";
import React from "react";
import { Constants } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "#5c5c5c",
    textDecoration: "none",
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

type Props = {
  category: string;
  label?: string;
};

const Breadcrumb = (props: Props) => {
  const classes = useStyles();
  const category: any = Constants.CATEGORIES.find(
    (c) => c.databaseName == props.category
  );

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <a
        target="_blank"
        href={`/`}
        rel="noopener noreferrer"
        className={classes.link}
      >
        <Link href={"/"}>
          <div className={classes.link}>
            <HomeIcon className={classes.icon} />
            Inicio
          </div>
        </Link>
      </a>

      {props.label ? (
        <a
          target="_blank"
          href={category?.url ? category?.url : "/"}
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Link href={category?.url ? category?.url : "/"}>
            <div className={classes.link}>
              <SvgIcon component={category?.icon} className={classes.icon} />
              {category?.title ? category?.title : props.category}
            </div>
          </Link>
        </a>
      ) : (
        <a
          target="_blank"
          href={category?.url ? category?.url : "/"}
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Link href={category?.url ? category?.url : "/"}>
            <div className={classes.link}>
              <SvgIcon component={category?.icon} className={classes.icon} />
              {category?.title}
            </div>
          </Link>
        </a>
      )}

      {props.label ? (
        <Typography className={classes.link}>
          <ReceiptIcon className={classes.icon} />
          {props.label}
        </Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default Breadcrumb;

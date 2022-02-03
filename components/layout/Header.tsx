import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Tooltip
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CMS_NAME } from "../../lib/constants";
import Ultimo from "../ultimo/ultimo";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1287,
    display: "block",
  },
  banner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerContainer: {
    maxWidth: 1287,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  header: {
    background: "linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)",
  },
  toolbarLink: {
    padding: "8px",
    flexShrink: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 12,
    fontWeight: 500,
    textTransform: "uppercase",
    backgroundOrigin: "padding-box",
    boxSizing: "border-box",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.1)",
      textDecoration: "none",
    },
  },
  closeButton: {
    right: theme.spacing(1),
    position: "absolute",
    top: 0,
    color: "#bad5f8",
    "&:hover": {
      color: "#fff",
    },
  },
  dividerVertical: {
    background: "#dadada",
    marginTop: 12,
    marginBottom: 12,
  },
  btnLive: {
    background: "#f44336",
    "&:hover": {
      background: "red",
    },
  },
  linkLive: {
    textDecoration: "none",
    color: "white",
  },
  bannerImage: {
    width: "100%",
  },
}));
type Props = {
  sections: any;
};
export default function Header(props: Props) {
  const { sections } = props;
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setKeyword("");
  };

  const handleClose = () => {
    setOpen(false);
    setKeyword("");
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/busqueda/${keyword}`);
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
        <link
          rel="desde-crespo-icon"
          sizes="512x512"
          href="/favicon/desde-crespo-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleFormSubmit}>
          <Grid container style={{ marginBottom: "1em" }}>
            <Grid item>
              <DialogTitle id="form-dialog-title">Buscar</DialogTitle>
            </Grid>
            <Grid item>
              <Tooltip title="Salir" placement="top-end">
                <IconButton
                  className={classes.closeButton}
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="search"
              type="text"
              label="¿Qué estás buscando?"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              fullWidth
              required
              autoComplete="none"
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              Buscar
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Toolbar className={classes.toolbar} key="toolbar-header">
        <Ultimo />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        ></Typography>
        <IconButton onClick={handleClickOpen} aria-label="buscar-post">
          <SearchIcon />
        </IconButton>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          className={classes.btnLive}
        >
          <a
            target="_blank"
            href="/live"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Link href="/live">
              <div>
                <Typography style={{ color: "white" }}>EN VIVO</Typography>
              </div>
            </Link>
          </a>
        </Button>
      </Toolbar>

      <div className={classes.bannerContainer}>
        <Grid item md={12} lg={12} className={classes.banner}>
          <a rel="home" href="https://desdecrespo.com.ar/">
            <img
              src="/banner-desktop.jpg"
              alt="Banner - Desde Crespo"
              className={classes.bannerImage}
            />
          </a>
        </Grid>
      </div>

      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Toolbar component="nav" variant="dense">
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerVertical}
            />
            {sections.map((section, index) => (
              <>
                <div key={index}>
                  <a
                    target="_blank"
                    href={section.url}
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Link key={section.title} href={section.url}>
                      <Button
                        variant="text"
                        size="small"
                        style={{ color: "white" }}
                      >
                        <Typography className={classes.toolbarLink}>
                          {" "}
                          {section.title}{" "}
                        </Typography>
                      </Button>
                    </Link>
                  </a>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.dividerVertical}
                />
              </>
            ))}
          </Toolbar>
        </div>
      </header>
    </>
  );
}

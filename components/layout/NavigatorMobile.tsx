import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  TextField
} from "@material-ui/core";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  createTheme,
  makeStyles,
  Theme,
  ThemeProvider
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { Constants } from "../../utils/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      color: "rgba(255, 255, 255, 0.7)",
      paddingLeft: theme.spacing(3),
      textDecoration: "none",
      listStyle: "none",
      "&:hover,&:focus": {
        backgroundColor: "#404854",
      },
    },
    itemCategory: {
      background: "linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)",
      //paddingBottom: 10,
      paddingLeft: 10,
      marginBottom: 2,
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

    divider: {
      marginTop: 2,
    },
  })
);

export interface NavigatorProps extends Omit<DrawerProps, "classes"> {}

function NavigatorMobile(props: any) {
  const { ...other } = props;
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
    onCloseDialog();
  };

  const onCloseDialog = () => {
    props.onCloseDialog();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleFormSubmit}>
          <Grid container>
            <Grid item xs={11}>
              <DialogTitle id="form-dialog-title">Buscar</DialogTitle>
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

      <ThemeProvider theme={theme}>
        <Drawer variant="permanent" {...other}>
          <List disablePadding style={{ background: "lightgrey" }}>
            <ListItem
              className={clsx(classes.item, classes.itemCategory)}
              style={{ background: "white"}}
            >
              <img
                  src="/iconmobile.png"
                  alt="Banner - Desde Crespo"
                  style={{ width: "100%", display: "flex", padding: 20 }}
                />
            </ListItem>

            {Constants.CATEGORIES.map((item, index) => (
              <div key={index}>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                  <ListItemText style={{ color: "white" , margin: 0}}>
                    <Link key={item.title} href={item.url}>
                      <Button
                        variant="text"
                        size="small"
                        style={{ color: "white" }}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </ListItemText>
                </ListItem>
              </div>
            ))}
          </List>

          <IconButton onClick={handleClickOpen}>
            <SearchIcon style={{ color: "rgb(252, 74, 0)" }} />
          </IconButton>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default memo(NavigatorMobile);

let theme = createTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "lightgrey",
      },
    },
  },
};

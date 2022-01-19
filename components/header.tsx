import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import Link from 'next/link'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme: Theme) => ({
  bannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1287,
    display: 'block',
  },
  banner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerContainer: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  header: {
    background: 'linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)',
  },
  toolbarLink: {
    'padding': '8px',
    'flexShrink': 0,
    'fontFamily': 'Roboto, Helvetica, Arial, sans-serif',
    'fontSize': 12,
    'fontWeight': 500,
    'textTransform': 'uppercase',
    'backgroundOrigin': 'padding-box',
    'boxSizing': 'border-box',
    'transition': '0.3s',
    '&:hover': {
      boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
      textDecoration: 'none',
    },
  },
  closeButton: {
    'right': theme.spacing(1),
    'position': 'absolute',
    'top': 0,
    'color': '#bad5f8',
    '&:hover': {
      color: '#fff',
    },
  },
  dividerVertical: {
    background: '#dadada',
    marginTop: 12,
    marginBottom: 12,
  },
  btnLive: {
    'background': '#f44336',
    '&:hover': {
      background: 'red',
    },
  },
  linkLive: {
    textDecoration: 'none',
    color: 'white',
  },
}));

type Props = {
  sections: any
}

export default function Header(props: Props) {
  const {sections} = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setKeyword('');
  };

  const handleClose = () => {
    setOpen(false);
    setKeyword('');
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
   // navigate(`/busqueda?keyword=${keyword}`);
    setOpen(false);
  };
  return (

<>
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleFormSubmit}>
          <Grid
            container
            style={{marginBottom: '1em'}}
          >
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
</>
  )
}

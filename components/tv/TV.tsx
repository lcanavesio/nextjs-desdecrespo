import { Grid, Theme, Typography } from '@material-ui/core';
/* eslint-disable quote-props */
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import ReactPlayer from 'react-player';


const useStyles = makeStyles((theme: Theme) => ({
  radio: {
    maxWidth: '60em',
    width: '100%;',
  },
  title: {
    backgroundColor: '#f44336',
    color: '#ffffff',
    width: '100%',
    textAlign: 'center',
    padding: '5px',
    paddingBottom: '1px',
  },
  div: {
    background: 'rgba(0, 0, 0, 0.87)',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderRadius: '0 0 0 0',
  },
}));

const TV = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.div}>
      <Grid item style={{ background: 'black', paddingLeft: 5, paddingRight: 3 }}>
        <ReactPlayer
          style={{ background: 'black' }}
          height="100%"
          width="100%"
          controls={true}
          url={'https://stmvideo1.livecastv.com/canal6er/canal6er/playlist.m3u8'}
          config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        />
      </Grid>
      <Grid item className={classes.title}>
        <Typography variant="h6">CANAL 6 ERTV EN VIVO</Typography>
      </Grid>
    </Grid>


  );
};
export default TV;



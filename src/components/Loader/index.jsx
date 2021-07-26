import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    color: '#FC842D',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color= "inherit" />
    </div>
  );
}
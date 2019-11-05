import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons({onClick}) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" 
      onClick={onClick}
      className={classes.button}>
        Default
      </Button>
    </div>
  );
}
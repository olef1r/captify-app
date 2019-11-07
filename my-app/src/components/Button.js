import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: '-80px',
    marginLeft: '34rem'
  },
  text: {
    display: 'block',
    marginTop: '102px',
    marginLeft: '27rem',
    color: 'red'
  }
}));

export default function OutlinedButtons({ onClick, disabled }) {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Button variant="outlined" 
        onClick={onClick}
        disabled={disabled}
        className={classes.button}>
        Click
      </Button>
      {disabled ? <p className={classes.text}>You can add more items</p> : null}
    </Container>
  );
}
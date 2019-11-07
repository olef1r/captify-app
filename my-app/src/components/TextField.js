import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  textField: {
    marginLeft: '44rem',
    width: 200,
  },
}));

export default function BasicTextFields({ onChangeValue, value }) {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Enter item"
            margin="normal"
            onChange={onChangeValue}
            value={value}
          />
      </form>
    </Container>
  );
}

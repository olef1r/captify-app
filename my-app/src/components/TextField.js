import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { valueSelector } from '../selectors/value.selectors';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function BasicTextFields({onChange, value }) {
  const classes = useStyles();
 //const [value, setValue] = React.useState('Controlled');
 const _onConfirm = (e) => {
   //console.log(e.target.value)
   onChange(e.target.value)
 }
 console.log('STORE', value)

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Standard"
          margin="normal"
          onChange={_onConfirm}
        />
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  value: valueSelector(state)
});


export default connect(
  mapStateToProps
)(BasicTextFields);

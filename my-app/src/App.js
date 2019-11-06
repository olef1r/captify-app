import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SimpleTable from './components/Table';
import Button from './components/Button';
import  TextField from './components/TextField';
import { valueSelector } from './selectors/value.selectors';
import { loadValue } from './actions/value-action'


function App({value, loadValue}) {
  console.log("v", value)
  return (
    <div className="App">
      <Header />
      <SimpleTable rows={rows} />

        <TextField onChange = {loadValue}/>
        <Button/ >
     
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  value: valueSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadValue }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

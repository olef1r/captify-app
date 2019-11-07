import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SimpleTable from './components/Table';
import Button from './components/Button';
import TextField from './components/TextField';
import { postItem, getItems } from './services/bff';
import xss from 'xss';
import { isEmpty } from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [], 
      update: false
    };
  };

  componentDidMount() { 
    getItems().then(result => this.setState({ data: result.data }));
  };

  componentDidUpdate() {
    if (this.state.update) {
      getItems().then(result => this.setState({ data: result.data }));
      this.setState({update: !this.state.update})
    }
  }

  _onChange = e => this.setState({ value: e.target.value });
 
  _onClick = e => {
    e.preventDefault();
    const filteredData = xss(this.state.value);
    if (isEmpty(filteredData)) {
      return;
    }
    postItem({ item: filteredData }).then(() => {
      this.setState({ update: true, value: '' });
    });    
  }
   
  render() {   
    const isLimitExceeded = this.state.data.length < 10 ? false : true;
    return(
      <div>
        <Header />
        <SimpleTable rows={this.state.data} />
        <div style={{display: "inline-flex"}}>
          <TextField value={this.state.value} onChangeValue={this._onChange} />
          <Button onClick={this._onClick} disabled={isLimitExceeded} isValueEmpty/>
        </div>
        {isLimitExceeded  ? <p style={{display: "inline"}}>You cannot add more items</p> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
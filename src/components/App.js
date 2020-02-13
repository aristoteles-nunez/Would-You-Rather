import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Login from './Login';

class App extends Component {
  render(){
    return (
      <div>
        Would you rather? 
        <br />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Login />
      </div>
    );
  }
}

export default connect()(App);

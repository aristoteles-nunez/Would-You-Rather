import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class App extends Component {
  render(){
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default connect()(App);

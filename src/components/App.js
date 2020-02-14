import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Login from './Login';
import NavBar from './NavBar';

class App extends Component {
  state = {
    authedUser: {
      name: 'Sotsir Nunez',
      id: '1234',
      avatarURL: './images/avatars/default.png'
    }
  }
  render(){
    return (
      <div>
        <NavBar user={this.state.authedUser}/>
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

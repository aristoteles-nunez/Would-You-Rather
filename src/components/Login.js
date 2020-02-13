import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from './../actions/users'

class Login extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetUsers());
    }

    render(){
        return (
            <div>
                Login page
            </div>
        );
    }
}

export default connect()(Login);
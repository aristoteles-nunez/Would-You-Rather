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
                <br />
                Registered Users: 
                <ul>
                    {this.props.registeredUsers.map((user)=>(
                        <li key={user.id}> {user.name} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => ({
    registeredUsers: Object.keys(users).map((userId)=>({
        id: userId,
        name: users[userId].name,
        avatarURL: users[userId].avatarURL 
    }))
})


export default connect(mapStateToProps)(Login);
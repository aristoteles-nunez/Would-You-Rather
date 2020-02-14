import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {
    state = {
        authedUser: {
            name: 'Sotsir Nunez',
            id: '1234',
            avatarURL: './images/avatars/default.png'
        }
    }
    render() {
        return (
            <div>
                <NavBar user={this.state.authedUser}/>
            </div>
        )
    }
}

export default Home;
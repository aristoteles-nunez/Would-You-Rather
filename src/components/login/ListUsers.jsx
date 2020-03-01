import React from 'react';
import { useSelector } from 'react-redux';

const ListUsers = () => {
    const users = useSelector(state => state.users);
    const registeredUsers = Object.keys(users).map((userId)=>({
        id: userId,
        name: users[userId].name,
        avatarURL: users[userId].avatarURL 
    }));
    console.log('registered users: ', registeredUsers);
    return (
        <div>
            Choose users:
            <ul>
                {registeredUsers.map((user)=>(
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
        </div>       
    )
}

export default ListUsers;
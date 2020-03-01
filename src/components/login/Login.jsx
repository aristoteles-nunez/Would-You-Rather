import React, { useEffect } from 'react';
import { handleGetUsers } from '../../actions/users';
import { useDispatch } from 'react-redux';
import ListUsers from './ListUsers'

const Login = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(handleGetUsers());
    });
    
    return (
        <div>
            Login page
            <br />
            <ListUsers />
        </div>
    )    
}

export default Login;
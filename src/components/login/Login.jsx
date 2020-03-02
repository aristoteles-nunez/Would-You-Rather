import React, { useEffect } from 'react';
import { handleGetUsers } from '../../actions/users';
import { useDispatch } from 'react-redux';
import ListUsers from './ListUsers'
import useStyles from './Login-style';

import { Container, Box } from '@material-ui/core';

const Login = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(handleGetUsers());
    });
    
    const classes = useStyles();

    return (
      <Container className={classes.container}>
        <Box className={classes.box}>
          <h1> Login </h1>
          <p> Select the user you want to login with</p>
          <ListUsers />
        </Box>
      </Container>
    );    
}

export default Login;
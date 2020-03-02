import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './ListUsers-style';

const ListUsers = () => {
  const users = useSelector(state => state.users);
  const registeredUsers = Object.keys(users).map(userId => ({
    id: userId,
    name: users[userId].name,
    avatarURL: users[userId].avatarURL
  }));
  console.log('registered users: ', registeredUsers);
  const classes = useStyles();

  const onUserClick = (event, userId) => {
    event.preventDefault();
    console.log('Selected User with id ', userId);
  };

  return (
    <div className={classes.root}>
      <List>
        {registeredUsers.map(user => (
          <ListItem 
            key={user.id} 
            button
            onClick={event => onUserClick(event, user.id)}
            >
            <ListItemIcon>
              <Avatar alt={user.name} src={user.avatarURL} />
            </ListItemIcon>
            <ListItemText>{user.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListUsers;

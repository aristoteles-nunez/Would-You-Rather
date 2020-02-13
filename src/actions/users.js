import { getUsers } from './../utils/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const handleGetUsers = () => {
    return (dispatch) => {
        return getUsers().then((users) => {
           dispatch(receiveUsers(users));
        });
    }
}
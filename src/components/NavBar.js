import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(7),
    },
    userDisplayName: {
        marginRight: theme.spacing(1),
    },
    userDisplayAvatar: {
        marginRight: theme.spacing(2),
    }
}));
  
const NavBar = (props) => {
    const classes = useStyles();    
    const { user } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Would you rather?
                </Typography>
                <Typography variant="subtitle2" className={classes.userDisplayName}>
                    Hello, {user.name}
                </Typography>
                <Avatar className={classes.userDisplayAvatar} alt={user.name} src={user.avatarURL} />
                <Button 
                    color="inherit"
                    endIcon={<ExitToAppIcon />}
                >
                    Logout
                </Button>
            </Toolbar>
            </AppBar>
        </div>
    )

}

export default NavBar;
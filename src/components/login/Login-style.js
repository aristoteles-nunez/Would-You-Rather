import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        //height: '100VH',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 308,
        padding: '20px 10px',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 416,
            boxShadow: theme.shadows[3],
            padding: '28px 64px 49px',
        }
    }
}));

export default useStyles;

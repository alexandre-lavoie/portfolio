import * as React from 'react';
import { Drawer, Grid, makeStyles } from '@material-ui/core';
import { ReactComponent as Glasses } from '../images/Glasses.svg';
import { useHistory } from 'react-router-dom';
import SocialBar from './SocialBar';

interface NavMenuProps {
    open?: boolean,
    onClose?: () => void
}

const useStyles = makeStyles(theme => ({
    drawer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary
    },
    container: {
        padding: '1em',
        height: '100%'
    },
    glasses: {
        width: '3em',
        fill: theme.palette.primary.main,
        height: 'auto',
        marginTop: '1em',
        cursor: 'pointer'
    }
}));

const NavMenu: React.FC<NavMenuProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return <Drawer anchor='right' onClose={props.onClose} open={props.open} classes={{ paper: classes.drawer }}>
        <Grid container direction='column' className={classes.container}>
            <Grid item xs container justify='center' alignItems='flex-start'>
                <Glasses onClick={() => history.push('/')} className={classes.glasses} />
            </Grid>
            <SocialBar justify='flex-end' alignItems='center' item />
        </Grid>
    </Drawer>
}

export default NavMenu;
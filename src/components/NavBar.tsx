import * as React from 'react';
import { Paper, Grid, IconButton, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { ReactComponent as Glasses } from '../images/Glasses.svg';
import NavMenu from './NavMenu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        width: '100%',
        padding: '1em',
        background: 'none'
    },
    glasses: {
        marginLeft: '1em',
        width: '3em',
        fill: theme.palette.primary.main,
        height: 'auto',
        cursor: 'pointer'
    }
}));

const NavBar: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    return <>
        <NavMenu open={open} onClose={() => setOpen(false)} />
        <Paper elevation={0} square className={classes.container}>
            <Grid container>
                <Grid container item xs={6}>
                    <Grid item container alignItems='center'>
                        <Glasses onClick={() => history.push('/')} className={classes.glasses} />
                    </Grid>
                </Grid>
                <Grid container item xs={6} alignItems='center' justify='flex-end'>
                    <Grid item>
                        <IconButton color='primary' onClick={() => setOpen(true)}>
                            <Menu />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper></>
}

export default NavBar;
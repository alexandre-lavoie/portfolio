import * as React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import NavBar from '../components/NavBar';
import SocialBar from '../components/SocialBar';
import Projects from '../components/Projects';

const useStyles = makeStyles(theme => ({
    topContainer: {
        width: '100%',
        height: '50vh',
        background: theme.palette.secondary.main,
        zIndex: -1
    },
    container: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
    },
    contactButton: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main
    }
}));

const LandingPage: React.FC = () => {
    const classes = useStyles();

    return <>
        <NavBar />

        <Grid container justify='center' direction='column' alignItems='center' className={classes.topContainer}>
            <Grid item style={{ marginBottom: '1em' }} container direction='column' justify='center'>
                <Grid item>
                    <Typography color='textSecondary' variant='h3' align='center'>
                        Hi, I'm Alex
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color='textSecondary' variant='h5' align='center'>
                        Developer and Designer
                    </Typography>
                </Grid>
            </Grid>
            <SocialBar item justify='center' />
        </Grid>

        <Projects />
    </>
}

export default LandingPage;
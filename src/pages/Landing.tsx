import { Avatar, Card, CardActions, CardHeader, Grid, IconButton, Tooltip } from '@material-ui/core';
import { AccountCircle, Email, LinkedIn } from '@material-ui/icons';
import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';
import NavBar from '../components/NavBar';
import Profile from '../images/Profile.png';

const BUTTONS = [
    {
        title: 'CV',
        icon: AccountCircle,
        link: ''
    },
    {
        title: 'Email',
        icon: Email,
        link: 'mailto:alexandre.lavoie00@gmail.com'
    },
    {
        title: 'LinkedIn',
        icon: LinkedIn,
        link: 'https://www.linkedin.com/in/alexandre-lavoie-00/'
    },
]

const LandingPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Grid container alignItems='center' justify='center' style={{ position: 'absolute', height: '100vh', width: '100%', top: '0', left: '0' }}>
                <Grid item style={{ pointerEvents: 'all' }}>
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 2, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Tilt options={{ scale: 1.5 }} style={{ width: 'max-content', height: 'max-content' }}>
                            <Card style={{ maxWidth: '30em' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar src={Profile} />
                                    }
                                    title={<b>Alexandre Lavoie</b>}
                                    subheader={<span style={{ fontSize: '0.75rem' }}>Full Stack - Gaming</span>}
                                />
                                <CardActions style={{ paddingTop: '0px' }}>
                                    {
                                        BUTTONS.map((button, index) => <Tooltip
                                            title={button.title}
                                            key={index}
                                        >
                                            <IconButton
                                                onClick={() => window.open(button.link)}
                                            >
                                                <button.icon />
                                            </IconButton>
                                        </Tooltip>)
                                    }
                                </CardActions>
                            </Card>
                        </Tilt>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default LandingPage;
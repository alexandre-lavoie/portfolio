import { Avatar, Card, CardHeader, Grid, Paper, CardMedia } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';
import NavBar from '../components/NavBar';

const DevPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Grid container spacing={3} justify='center' style={{ position: 'absolute', width: '100%', top: '0', left: '0', paddingTop: 'calc(112px + 1em)' }}>
                <Grid item style={{ pointerEvents: 'all' }}>
                    <Card>
                        <CardMedia image='https://img.itch.zone/aW1nLzM0Njg2NzIucG5n/315x250%23c/BSHG%2F0.png' style={{width: '315px', height: '250px'}} />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default DevPage;
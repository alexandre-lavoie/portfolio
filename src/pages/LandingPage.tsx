import { Avatar, Card, CardHeader, Grid, Paper, CardMedia, Typography, IconButton, Box } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';
import { ReactComponent as Shuttle } from '../images/Shuttle.svg';
import { ReactComponent as Background } from '../images/ShapeBackground.svg';
import { ReactComponent as Glasses } from '../images/Glasses.svg';

const LandingPage: React.FC = () => {

    const { scrollYProgress } = useViewportScroll()
    const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <>
            <Grid container style={{ position: 'fixed', padding: '2em', zIndex: 1000 }}>
                <Grid container alignItems='center' item xs>
                    <Grid item>
                        <Glasses width='52px' />
                    </Grid>
                </Grid>
                <Grid container alignItems='center' justify='flex-end' item xs style={{ color: '#FAFAFF' }}>
                    <Grid item>
                        <Typography>Portfolio</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                <Grid container item xs={12} lg={6} justify='center' alignItems='center'>
                    <Grid item>
                        <Typography variant='h2'><Box fontWeight={900} style={{ color: 'white' }}>THE FUTUR IS NOW</Box></Typography>
                        <Typography variant='h5'><Box fontWeight={200} style={{ color: 'white' }}>Are you ready to join the revolution?</Box></Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg={6} style={{ height: '100vh' }}>
                    <Grid container justify='center' alignItems='center' style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
                        <Grid item>
                            <motion.div
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Background width='800px' height='800px' />
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' alignItems='center' style={{ position: 'relative', top: "-100vh", left: 0, width: '100%', height: '100vh' }}>
                        <Grid item>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                style={{ x, scale }}
                            >
                                <Shuttle width='800px' height='800px' />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container justify='center' style={{ position: 'absolute', width: '100%', bottom: '1em', pointerEvents: 'none' }}>
                <Grid item>
                    <IconButton style={{ color: '#FAFAFF' }}>
                        <motion.div
                            initial={{ y: 2 }}
                            animate={{ y: -2 }}
                            transition={{ yoyo: 'Infinity', duration: 0.5, ease: 'linear' }}
                            style={{ width: '48px', height: '48px', pointerEvents: 'all' }}
                        >
                            <KeyboardArrowDown style={{ fontSize: '48px' }} />
                        </motion.div>
                    </IconButton>
                </Grid>
            </Grid>

            <div style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#FAFAFF', zIndex: 1000 }}></div>
        </>
    );
}

export default LandingPage;
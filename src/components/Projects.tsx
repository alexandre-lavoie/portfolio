import * as React from 'react';
import Project,{ IProject }  from './Project';
import HackMTL from '../images/HackMTL.png';
import GoGoDungeonImage from '../images/GoGoDungeonImage.png';
import GoGoDungeonVideo from '../images/gogodungeon.mp4';
import MCGE from '../images/MCGE.png';
import DeepPhysics from '../images/DeepPhysics.png';
import ExploitMe from '../images/exploitme.png';
import Kiwi from '../images/kiwi.png';
import { makeStyles, Grid } from '@material-ui/core';

const PROJECTS: IProject[] = [
    {
        image: DeepPhysics,
        link: 'https://github.com/alexandre-lavoie/deep-physics'
    },
    {
        image: GoGoDungeonImage,
        video: GoGoDungeonVideo,
        link: 'https://alexandre-lavoie.itch.io/go-go-dungeon'
    },
    {
        image: Kiwi,
        link: 'https://alexandre-lavoie.itch.io/kiwi'
    },
    {
        image: 'https://cdn.dribbble.com/users/5729348/screenshots/13643934/media/d086c323ad42c082aa6ebcccc46c42b6.png',
        link: 'https://dribbble.com/shots/13643934-Skull-Render'
    },
    {
        image: HackMTL,
        link: 'https://hackmtl.ca'
    },
    {
        image: 'https://cdn.dribbble.com/users/5729348/screenshots/13645285/media/079edb325ef877bbfbb93ae87112e447.png',
        link: 'https://dribbble.com/shots/13645285-Donut-Shop-Mockup'
    },
    {
        image: MCGE,
        link: 'https://github.com/alexandre-lavoie/mcge'
    },
    {
        image: 'https://cdn.dribbble.com/users/5729348/screenshots/13643960/media/a5534dc070349e3a319ad364aed77de3.png',
        link: 'https://dribbble.com/shots/13643960-Donut-Render'
    },
    {
        image: ExploitMe,
        link: 'https://github.com/alexandre-lavoie/exploit.me'
    },
];

const useStyles = makeStyles(() => ({
    container: {
        padding: '1em'
    },
}));

const Projects: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.container}>
            {
                PROJECTS.map(project => <Grid item xs={12} sm={6} md={4}>
                    <Project project={project} />
                </Grid>)
            }
        </Grid>
    )
}

export default Projects
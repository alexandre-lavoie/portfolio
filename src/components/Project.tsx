import * as React from 'react';
import { Card, makeStyles, CardActionArea } from '@material-ui/core';
import Tilt from 'react-tilt';

export interface IProject {
    image: string,
    video?: string,
    link: string
}

const useStyles = makeStyles(theme => ({
    container: {
        background: `linear-gradient(145deg, ${theme.palette.primary.main} 50%, ${theme.palette.text.secondary} 100%);`,
        height: 'auto'
    },
    text: {
        position: 'absolute',
        bottom: 0
    }
}));

const Project: React.FC<{ project: IProject }> = (props) => {
    const classes = useStyles();
    const [hover, setHover] = React.useState(false);

    return <Tilt
        options={{
            max: 1,
            scale: 1.025
        }}
    >
        <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} elevation={6} className={classes.container}>
            <CardActionArea onClick={() => window.open(props.project.link, '_blank')} style={{ display: 'flex' }}>
                {
                    (hover && props.project.video) ? <video width='100%' src={props.project.video} autoPlay muted loop /> : <img width='100%' src={props.project.image} />
                }
            </CardActionArea>
        </Card>
    </Tilt>

}

export default Project;
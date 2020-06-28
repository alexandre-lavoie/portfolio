import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const sections = [
    {
        name: 'HOME',
        path: '/'
    },
    {
        name: 'DEVELOPMENT',
        path: '/dev'
    },
    {
        name: 'DESIGN',
        path: '/design'
    }
];

const MenuPage: React.FC = () => {

    const history = useHistory();

    return (
        <Grid container alignItems='center' justify='center' style={{ position: 'absolute', height: '100vh', width: '100%', top: '0', left: '0' }}>
            <Grid item>
                <Paper color='secondary' style={{ padding: '2em', pointerEvents: 'all' }}>
                    <Grid container justify='center' direction='column' spacing={1}>
                        {
                            sections.map((section, index) => <Grid item key={index}>
                                <Typography
                                    variant='h3'
                                    color='textSecondary'
                                    align='center'
                                    onClick={() => history.push(section.path)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {section.name}
                                </Typography>
                            </Grid>)
                        }
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default MenuPage;
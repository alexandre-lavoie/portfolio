import React from 'react';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { Fab, Grid } from '@material-ui/core';

const NavBar: React.FC = (props) => {

    const history = useHistory();

    return (
        <Grid container justify='flex-end' style={{ position: 'fixed', top:'0', width: '100%', padding: '2em' }}>
            <Grid item>
                <Fab color='secondary' style={{ pointerEvents: 'all' }} onClick={() => history.push('/menu')}>
                    <Menu />
                </Fab>
            </Grid>
        </Grid>
    );
}

export default NavBar;
import * as React from 'react';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import CV from '@material-ui/icons/InsertDriveFile';
import CVFile from '../files/CV.pdf';

const LINKS = [
    {
        name: 'GitHub',
        link: 'https://github.com/alexandre-lavoie',
        icon: GitHub
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/alexandre-lavoie-00/',
        icon: LinkedIn
    },
    {
        name: 'Email',
        link: 'mailto:alexandre.lavoie00@gmail.com',
        icon: Email
    },
    {
        name: 'CV',
        link: CVFile,
        icon: CV
    }
]

interface SocialBarProps {
    justify?: 'center' | 'flex-end',
    alignItems?: 'center',
    item?: boolean
}

const SocialBar: React.FC<SocialBarProps> = (props) => {
    return <Grid item={props.item} container justify={props.justify} alignItems={props.alignItems}>
        {
            LINKS.map(
                link => <Grid item>
                    <Tooltip title={link.name}>
                        <IconButton color='primary' onClick={() => window.open(link.link, '_blank')}>
                            <link.icon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            )
        }
    </Grid>;
}

export default SocialBar;
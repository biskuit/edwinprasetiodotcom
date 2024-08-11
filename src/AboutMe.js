import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


// styling

import './App.css';




export const AboutMe = () => {
    var profile_pic = require('./static/img/profile.jpg');

    const heading = "About Me" ;
    const content = `
            A self-driven, result-oriented full stack engineer with extensive experience in software infrastructure,
            automation, and system design within the automotive and embedded system industries.
            `;

    const content2 = `
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
            `;

  return (
    <Grid container spacing={2} id="about-me-grid" >
        <Grid item xs={12}>
            <Typography variant="h5" noWrap component="div" color="skyblue">
                {heading}
            </Typography>
        </Grid>
        <Grid item xs={8}>
            <Typography paragraph>
                {content}
            </Typography>

            <Typography paragraph>
                {content2}
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Box
                component="img"
                sx={{
                height: "100%",
                width: "100%",
                maxHeight: { xs: 300, md: 900 },
                maxWidth: { xs: 100, md: 300 },
                }}
                alt="profile_pic"
                src={profile_pic}
            />
        </Grid>
    </Grid>
  );
}

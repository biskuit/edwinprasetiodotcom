import * as React from 'react';
import '@fontsource-variable/jetbrains-mono';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// app bar
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// drawer
import Divider from '@mui/material/Divider';

// routes
import { Routes, Route} from "react-router-dom";

// local components
import { SideNavbar } from "./SideNavbar.js";
import { ProjectCard } from "./ProjectCard.js";

// styling

import './App.css';

// images
var pixel = require('./static/img/pixel.jpg');


const drawerWidth = 240;    // set the width for the drawer

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        classes="titleBar"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Edwin Prasetio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Container maxWidth="lg">
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h4" noWrap component="div">
            About me
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography paragraph>
            A self-driven, result-oriented full stack engineer with extensive experience in
            software infrastructure, automation, and system design within the automotive and embedded system industries.
            </Typography>
            </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg">
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h4" noWrap component="div">
            Things I do
            </Typography>
            </Grid>

            <Grid item xs={12}>
            <Typography paragraph>
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
            </Typography>
            </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h4" noWrap component="div">
            Projects
            </Typography>
            </Grid>
          <Grid item xs={4}>
            <ProjectCard
                projectImg={pixel}
                projectType="A"
                projectTitle="Mr. Pixel"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
          </Grid>
           <Grid item xs={4}>
            <ProjectCard
                projectImg={pixel}
                projectType="A"
                projectTitle="Mr. Pixel"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
                projectImg={pixel}
                projectType="A"
                projectTitle="Mr. Pixel"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
          </Grid>
        </Grid>
        </Container>
      </Box>

    <SideNavbar drawerWidth={drawerWidth} />

    </Box>
//    <Routes>
//        <Route path="/" element={<Home />} />
//    </Routes>

  );
}

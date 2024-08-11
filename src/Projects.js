import * as React from 'react';
import '@fontsource-variable/jetbrains-mono';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ProjectCard } from "./ProjectCard.js";

// styling

import './App.css';



export const Projects = () => {
    // images
    var pixel = require('./static/img/projects/pixel.jpg');
    var audience_logger = require('./static/img/projects/audience_logger.jpg');
    var balloons_catcher = require('./static/img/projects/balloons_catcher.jpg');
    var ddr = require('./static/img/projects/ddr.jpg');
    var ddrg = require('./static/img/projects/ddrg.jpg');
    var linefollowerrbt = require('./static/img/projects/linefollowerrbt.jpg');
    var wakker = require('./static/img/projects/wakker.jpg');


  return (
    <Grid container spacing={2} id="projects-grid" >
        <Grid item xs={12}>
            <Typography variant="h5" noWrap component="div" color="orange">
            Projects
            </Typography>
        </Grid>

        <Grid item xs={4}>
            <ProjectCard
                projectImg={audience_logger}
                projectType="A"
                projectTitle="Audience Logger"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
        </Grid>
        <Grid item xs={4}>
            <ProjectCard
                projectImg={balloons_catcher}
                projectType="B"
                projectTitle="Balloons Catcher"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
        </Grid>
        <Grid item xs={4}>
            <ProjectCard
                projectImg={ddr}
                projectType="D"
                projectTitle="Dietary Data Recording"
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
                projectImg={ddrg}
                projectType="D"
                projectTitle="Drone Dancing Game"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
        </Grid>
        <Grid item xs={4}>
            <ProjectCard
                projectImg={linefollowerrbt}
                projectType="L"
                projectTitle="Line Follower Robot"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
        </Grid>

        <Grid item xs={4}>
            <ProjectCard
                projectImg={wakker}
                projectType="W"
                projectTitle="Alarm Clock"
                projectDate="July 4, 2019"
                projectDesc="Mr Pixel is a quirky mini australian shepperd, smart, quick, grumpy, but loyal. Often misrecognized as a pet skunk!"
            />
        </Grid>
    </Grid>
  );
}

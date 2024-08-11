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
    var pixel = require('./static/img/pixel.jpg');

  return (
    <Grid container spacing={2} id="projects-grid" >
        <Grid item xs={12}>
            <Typography variant="h5" noWrap component="div" color="orange">
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
  );
}

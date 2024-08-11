import * as React from 'react';
import { useEffect } from 'react';
import '@fontsource-variable/jetbrains-mono';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ProjectCard } from "./ProjectCard.js";
import { PROJECT_DATA } from "./ProjectData.js";

// styling

import './App.css';



export const Projects = () => {

    useEffect(() => {
        console.log("PROJECT_DATA:", PROJECT_DATA)

    }, []);

  return (
    <Grid container spacing={2} id="projects-grid">
        <Grid item xs={12}>
            <Typography variant="h5" noWrap component="div" color="orange">
            Projects
            </Typography>
        </Grid>

        {PROJECT_DATA.map((pd) => (
            <Grid item xs={4}>
                <ProjectCard
                    projectImg={pd.img}
                    projectType={pd.type}
                    projectTitle={pd.title}
                    projectDate={pd.when}
                    projectSummary={pd.summary}
                    projectDesc={pd.desc}
                    projectComponents={pd.components}
                />
            </Grid>
        ))}

    </Grid>
  );
}

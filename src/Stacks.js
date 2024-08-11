import * as React from 'react';
import '@fontsource-variable/jetbrains-mono';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


// styling

import './App.css';




export const Stacks = () => {
    const hue = Math.random() * 360;
    const lightness = Math.random() * 75;
    const randomColor = `hsl(${hue}, 100%, ${25+lightness}%)`

    const heading = "Stacks" ;
    const software_stacks = [
        "python", "C/C++", "javascript", "typescript", "HTML"
    ];
    const hardware_stacks = [
        "power supply", "Digital Multimeter","TPMS", "BLE", "USB", "SPI", "I2C",
        "board bringup", "board layout", "schematic design", "soldering"
    ];
    const tools_stacks = [
        "jenkins", "Kubernetes", "Docker", "Docker Swarm", "MongoDB", "Flask",
        "React", "Altium"
    ];



  return (
    <Grid container spacing={2} id="stacks-grid" >
        <Grid item xs={12}>
            <Typography variant="h5" noWrap component="div" color="lightgreen">
                {heading}
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h6" noWrap component="div" color="lightyellow">
                Software
            </Typography>
            {software_stacks.map(software => (
                <Chip className="stacks-chip" label={software} color="primary" />
            ))}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h6" noWrap component="div" color="lightyellow">
                Hardware
            </Typography>
            {hardware_stacks.map(hw => (
                <Chip className="stacks-chip" label={hw} color="secondary" />
            ))}
        </Grid>
        <Grid item xs={4}>
            <Typography variant="h6" noWrap component="div" color="lightyellow">
                Tools
            </Typography>
            {tools_stacks.map(tool => (
                <Chip className="stacks-chip" label={tool} color="success" />
            ))}
        </Grid>
    </Grid>
  );
}

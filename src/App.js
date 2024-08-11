import * as React from 'react';
import '@fontsource-variable/jetbrains-mono';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

// app bar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// routes
import { Routes, Route} from "react-router-dom";

// local components
import { AboutMe } from "./AboutMe.js";
import { Stacks } from "./Stacks.js";
import { Projects } from "./Projects.js";
import { SideNavbar } from "./SideNavbar.js";


// styling

import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'JetBrains Mono Variable',
      'monospace',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});



const drawerWidth = 240;    // set the width for the drawer

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
        <AppBar
        classes="titleBar"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
        >
        <Toolbar>
          <Typography variant="h4" noWrap component="div" color="skyblue">
            Edwin
          </Typography>
          <Typography variant="h4" noWrap component="div" color="lightgreen">
            .
          </Typography>
          <Typography variant="h4" noWrap component="div" color="orange">
            Prasetio
          </Typography>
        </Toolbar>
        </AppBar>
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 , b: 8}}
        >
            <Toolbar />
            <Container maxWidth="lg">
                <AboutMe />
            </Container>
            <Container className="divider-container" maxWidth="lg">
                <Toolbar />
                <Divider id="content-divider"/>
                <Toolbar />
            </Container>
            <Container maxWidth="lg">
                <Stacks />
            </Container>
            <Container className="divider-container" maxWidth="lg">
                <Toolbar />
                <Divider id="content-divider"/>
                <Toolbar />
            </Container>
            <Container maxWidth="lg">
                <Projects />
            </Container>
        </Box>
        <SideNavbar drawerWidth={drawerWidth} />
    </Box>
    </ThemeProvider>
  );
}

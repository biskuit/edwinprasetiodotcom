import * as React from 'react';
//import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Grid';

// app bar
//import AppBar from '@mui/material/AppBar';
//import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';

// drawer
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReorderIcon from '@mui/icons-material/Reorder';
import TopicIcon from '@mui/icons-material/Topic';

import { Link } from "react-router-dom"






export const SideNavbar = ({
    drawerWidth
}: SideNavbarProps) => {

  function handleClickToScroll(event, targetId){
    console.log("HandleClickToScroll: ", event, targetId);
    //document.getElementById(targetId).scrollIntoView();

    const yOffset = -60;
    const element = document.getElementById(targetId);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    return;
  };

  return (

        <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="right"
        >
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="About Me" disablePadding>
                <Link to="/">
                      <ListItemButton onClick={(e) => handleClickToScroll(e, 'about-me-grid')}>
                        <ListItemIcon>
                            <AccountBoxIcon id="about-me-icon" />
                        </ListItemIcon>
                        <ListItemText id="about-me-txt" primary="AboutMe" />
                      </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="Stacks" disablePadding>
                    <ListItemButton onClick={(e) => handleClickToScroll(e, 'stacks-grid')}>
                        <ListItemIcon>
                          <ReorderIcon id="stacks-icon"/>
                        </ListItemIcon>
                        <ListItemText id="stacks-txt" primary="Stacks" />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Projects" disablePadding>
                  <ListItemButton onClick={(e) => handleClickToScroll(e, 'projects-grid')}>
                    <ListItemIcon>
                      <TopicIcon id="projects-icon"/>
                    </ListItemIcon>
                    <ListItemText id="projects-txt" primary="Projects" />
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Drawer>

    );
}

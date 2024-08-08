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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link } from "react-router-dom"






export const SideNavbar = ({
    drawerWidth
}: SideNavbarProps) => {

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
                <ListItem key="main" disablePadding>
                <Link to="/">
                      <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="main" />
                      </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key="Projects" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Stacks" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stacks" />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Publications" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publications" />
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Drawer>

    );
}

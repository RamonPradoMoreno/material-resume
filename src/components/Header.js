import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
class Header extends React.Component {
  render() {
    return(
        <AppBar position="sticky">
            <Toolbar>
            <IconButton edge="start" className="button-menu" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
              <Typography>
                Resume
              </Typography>
            </Toolbar>
        </AppBar>
        );
   
}
}

export default Header;
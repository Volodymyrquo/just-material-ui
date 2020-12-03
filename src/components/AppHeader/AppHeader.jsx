import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import AppMenu from '../AppMenu';

const AppHeader = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          News
        </Typography>
        <Button color='inherit'>Login</Button>
        <div>
          <IconButton
            edge='end'
            color='inherit'
            aria-label='menu'
            onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <AppMenu handleClose={handleClose} anchorEl={anchorEl} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

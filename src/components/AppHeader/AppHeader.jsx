import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import AppMenu from './AppMenu';
import AppDrawer from './AppDrawer';

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <AppDrawer />
        <Typography variant='h6' className={classes.title}>
          News
        </Typography>
        <Button color='inherit'>Login</Button>

        <AppMenu />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

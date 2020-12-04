import React, { useState } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const AppDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, isOpen: anchor });
  };

  return (
    <>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={state.isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <div className={classes.root}>
            <List component='nav' aria-label='main mailbox folders'>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
              </ListItem>
            </List>
            <Divider />
            <List component='nav' aria-label='secondary mailbox folders'>
              <ListItem button>
                <ListItemText primary='Trash' />
              </ListItem>
              <ListItem button href='#simple-list'>
                <ListItemText primary='Spam' />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppDrawer;

import {
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import React, { useState } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const AppList = () => {
  const [state, setState] = useState([1]);
  const handleToggle = (item) => () => {
    const currentIndex = state.indexOf(item);
    const newState = [...state];

    if (currentIndex === -1) {
      newState.push(item);
    } else {
      newState.splice(currentIndex, 1);
    }

    setState(newState);
  };
  return (
    <List component='nav' aria-label='main mailbox folders'>
      {[
        {
          name: 'Element 1',
          description: 'Complicated description 1',
          checked: false,
        },
        {
          name: 'Element 2',
          description: 'Complicated description 2',
          checked: false,
        },
        {
          name: 'Element 3',
          description: 'Complicated description 3',
          checked: false,
        },
        {
          name: 'Element 4',
          description: 'Complicated description 4',
          checked: false,
        },
      ].map((item, idx) => {
        return (
          <div key={idx}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                id={idx}
                primary={item.name}
                secondary={item.description}
              />

              <ListItemSecondaryAction>
                <Checkbox
                  edge='end'
                  onChange={handleToggle(idx)}
                  checked={state.indexOf(item) !== -1}
                  inputProps={{ 'aria-labelledby': idx }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
};

export default AppList;
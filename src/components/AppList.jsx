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
import Heart from '@material-ui/icons/FavoriteBorder';
import FilledHeart from '@material-ui/icons/Favorite';

const AppList = ({ state, setState }) => {
  const [checked, setChecked] = useState([]);
  const handleToggle = (value, idx) => () => {
    const currentIndex = checked.indexOf(value.name);
    const newChecked = [...checked];
    const newState = [...state];

    if (currentIndex === -1) {
      newChecked.push(value.name);

      newState[idx] = { ...value, checked: true };
    } else {
      newChecked.splice(currentIndex, 1);
      newState[idx] = { ...value, checked: false };
    }

    setChecked(newChecked);
    setState(newState);
    console.log(newState);
    console.log(newChecked);
    console.log(newState[0].checked);
  };

  return (
    <List component='nav' aria-label='main mailbox folders'>
      {state.map((item, idx) => {
        return (
          <div key={idx}>
            <ListItem button>
              <ListItemIcon>
                <Checkbox
                  checkedIcon={<FilledHeart />}
                  icon={<Heart />}
                  edge='start'
                  onChange={handleToggle(item, idx)}
                  checked={item.checked}
                  inputProps={{ 'aria-labelledby': item.name }}
                />
              </ListItemIcon>
              <ListItemText
                id={item.name}
                primary={item.name}
                secondary={item.description}
              />
              <ListItemSecondaryAction></ListItemSecondaryAction>
            </ListItem>

            <Divider />
          </div>
        );
      })}
    </List>
  );
};

export default AppList;

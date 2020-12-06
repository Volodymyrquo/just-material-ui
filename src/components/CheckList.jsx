import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChekList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  debugger;
  return (
    <List dense className={classes.root}>
      {[
        { id: 0, color: 'blue' },
        { id: 1, color: 'green' },
        { id: 2, color: 'yellow' },
        { id: 3, color: 'red' },
      ].map((value, idx) => {
        const labelId = idx;
        console.log(value.color);
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${idx + 1}`}
                src={`/static/images/avatar/${idx + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.color} />
            <ListItemSecondaryAction>
              <Checkbox
                edge='end'
                onChange={handleToggle(idx)}
                checked={checked.indexOf(idx) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

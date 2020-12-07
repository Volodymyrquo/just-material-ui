import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AppForm = ({ setState, state, handleClose }) => {
  const classes = useStyles();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(false);
  const handleOnclick = () => {
    if (!name || !description) {
      setError(true);
      return;
    }
    const newState = [...state, { name, description, checked: false }];
    setState(newState);
    handleClose();
    console.log(newState);
  };

  return (
    <div className={classes.root}>
      <TextField
        label={`Element's name`}
        error={error}
        placeholder={`Add your element's name`}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={`Description`}
        error={error}
        placeholder='Add your description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button color='secondary' onClick={handleOnclick}>
        Add element
      </Button>
    </div>
  );
};

export default AppForm;

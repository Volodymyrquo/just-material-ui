import React, { useState } from 'react';
import { Button, Grid, Icon, Popover, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppForm from './AppForm';
import AppDialog from './AppDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '40px auto',
  },
  button: {
    padding: theme.spacing(10),
  },
}));
const AppButtons = ({ state, deleteElement, setState }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={2}>
        <Grid item xs={12} md={4} className={classes.button}>
          <Grid container justify='center'>
            <Button
              variant='contained'
              color='primary'
              justify='center'
              onClick={handleClick}
              aria-describedby={id}>
              Add element
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className={classes.button}>
          <Grid container justify='center'>
            <Button
              variant='contained'
              disabled={
                state.map((item) => item.checked).filter((item) => item)
                  .length === 0
              }
              color='secondary'
              onClick={deleteElement}>
              Delete checked element
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container justify='center'>
            <Button
              href='https://google.com.ua/'
              target='_blank'
              variant='contained'
              color='primary'
              endIcon={<Icon>add_to_drive</Icon>}
              onClick={() => {
                console.log('Clicked Add to Google Drive');
              }}>
              Add to Google Drive
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{ width: 300, padding: '15px 20px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <AppForm setState={setState} state={state} handleClose={handleClose} />
      </Popover>
      <AppDialog />
    </div>
  );
};

export default AppButtons;

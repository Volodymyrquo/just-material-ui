import { Button, Grid, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/AddCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '40px auto',
    background: '#8bc34a',
  },
  button: {
    padding: theme.spacing(10),
  },
}));
const AppButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          style={{ background: 'yellow' }}
          className={classes.button}>
          <Grid container justify='center'>
            <Button
              variant='contained'
              color='primary'
              justify='center'
              onClick={() => {
                console.log('Clicked Add element');
              }}>
              Add element
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ background: 'blue' }}
          className={classes.button}>
          <Grid container justify='center'>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                console.log('Clicked Delete checked element');
              }}>
              Delete checked element
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} style={{ background: 'pink' }}>
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
      <IconButton
        style={{ position: 'fixed', right: 50, bottom: 50 }}
        onClick={() => {
          console.log('Clicked IconButton');
        }}>
        <AddIcon color='primary' fontSize='large' />
      </IconButton>
    </div>
  );
};

export default AppButtons;

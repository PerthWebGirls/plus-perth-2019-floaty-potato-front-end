import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProvidersBoard from "./molecules/ProvidersBoard";
import ChangeDisplay from '../molecules/ChangeDisplayBoard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
            <span>Refine your Search:</span>
        </div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><ChangeDisplay/></Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
              <ProvidersBoard/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary" className={classes.button}>
        {/* Button name is changed id onclied is true */}
      </Button></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

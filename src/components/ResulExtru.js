import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { BorderRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '16vw',
    marginTop : '40%',
    borderRadius : 35,


  },
  control: {
    padding: theme.spacing(0),
  },
}));

export default function SpacingGrid(props) {
  
  const classes = useStyles();



  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2} >
            
            <Grid item>
              <Paper className={classes.paper}>
                <p className  = "textoGrandeInicio"> {props.titulo} </p>

                <p className  = "textoNormal"> {props.resultado} </p>

                <p className  = "textoGrandeInicio"> {props.medida} </p>

              </Paper>
            </Grid>

            
        </Grid>
      </Grid>
      
    </Grid>
  );
}
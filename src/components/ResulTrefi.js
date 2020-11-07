import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '40%',
    width: '30%',
    marginTop : '40%',
    borderRadius : 35,

  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} >
            
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
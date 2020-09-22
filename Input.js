import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({set,d,dta}) {
  const classes = useStyles();

const setval = (e)=>{
    set(e.target.value,d)
    

  
}

 

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value = {dta}   onChange={setval} id="standard-basic" label="" />
         </form>
  );
}

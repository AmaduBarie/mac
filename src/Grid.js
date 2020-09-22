import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from './Input'
import Button from '@material-ui/core/Button';
import Img from './img/Img'
import Table from './Table'
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  head:{
      height:50,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      fontSize:25,
      backgroundColor:'blue',
      color:'white',
      
  },
  heads:{
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    fontSize:25,
    backgroundColor:'blue',
    color:'white',
    marginTop:50
    
},
  btn:{
      height:50,
      
      backgroundColor:'green',
      "&:hover":{
          backgroundColor:'green'
      },
     minWidth:'200px' 
  }
}));

export default function AutoGrid({set,d,dd,f,r}) {
  const classes = useStyles();
  const [disp,setDisp] = useState(false)
 

  
const disps= (e)=>{
  setDisp(e)
}
  const send = ()=>{ 
      if(d.p&&d.a&&d.w){
       disps(true)
        fetch('https://script.google.com/macros/s/AKfycbxIDwUC4RfZFuUHyw3OJcNC3N2mCA3KP6T2gN0Ay9c_yqwwcUw/exec', {
          method: 'POST',
              body: JSON.stringify(
                [
                  [d.p,d.a,d.w],
                  {p:d.p,a:d.a,w:d.w},
                  d.pwd
                ]),

          }).then(res=> res.json())
          .then(e=>{
            
            if( e ==="success"){
              disps(false)
              f()
              r()
            }
          }) 
        .catch(e=>console.log("error")) 
      }else{
        console.log("enpty")
      }
   
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

      <Grid item xs={12}>
      <Paper className={classes.head}>
            Previous Expenditures 
        </Paper>
      </Grid>


      <Grid item xs={12}>
     
          <Table dd={dd}/>
       
      </Grid>
 
    
   

        <Grid item xs={12}> 
         <Paper className={classes.heads}>
            Recording Expenditures Form
        </Paper>
          <Paper className={classes.paper}>
    
             Purpose:<Input set={set} d = {'p'} dta = {d.p}/>
        </Paper>

        <Paper className={classes.paper}>
            Amount:<Input set={set} d = {'a'} dta = {d.a} />
        </Paper>

        
          <Paper className={classes.paper}>
             To whom:<Input set={set} d = {'w'} dta = {d.w}/>
        </Paper>


        <Paper className={classes.paper}>
            Password:<Input set={set} d = {'pwd'} dta = {d.pwd}/>
        </Paper>

         <Paper className={classes.paper}>
         <Button onClick={send} variant="contained" color="primary" className={classes.btn}>
            Send  {disp && <Img/>} 
        </Button>
        
        </Paper>
        <Grid item xs={12}>
        </Grid>

       
         
        

        </Grid>

      
      </Grid>
    </div>
  );
}

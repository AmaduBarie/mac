import React, { useState, useEffect } from "react";
 import './App.css';
 import Grid from './Grid'
function App() {
const [dt,setD] = useState({p:'',a:'',w:'',pwd:''})
const [dd,setDD] = useState([])
 
 
 

const f =()=>{
  fetch('https://script.google.com/macros/s/AKfycbxIDwUC4RfZFuUHyw3OJcNC3N2mCA3KP6T2gN0Ay9c_yqwwcUw/exec', {
    method: 'GET',
       }).then(res=> res.json())
       .then(e=>{
     setDD(e)  
    }).catch(e=>console.log("error")) 
}
  

useEffect(() => {
 f()
}, []);

 const  setA = (e,d)=>
 {
 
   if(d==='p'){
     setD({...dt,p:e});
   }else if(d==='a'){
     setD({...dt,a:e})
   }else if(d==='w'){
    setD({...dt,w:e})
   }else if(d==='pwd'){
    setD({...dt,pwd:e})
   }
 
 } 

 const reset = ()=>{
  setD({p:'',a:'',w:'',pwd:''})
 }
 
 
 
  return (
    <div className="App">
      <Grid set = {setA} d={dt} dd={dd} f={f}  r={reset}/>
    </div>
  );
}

export default App;

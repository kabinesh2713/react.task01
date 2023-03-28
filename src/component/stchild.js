import React, { Component } from 'react'

export class Stchild extends Component {
  render(){
    var s=this.props.task01
    function gettask(a){
        let h=s.filter((s)=>a>=s.duration);
        console.log
        (h.map((g)=>g.name));
     }
    return s.map((s,i)=><h1 key={i}>{s.name} {s.duration}<br></br><button onClick={()=>{gettask(s.duration)}}>click</button></h1>)
 }
}

export default Stchild
import React, { Component } from 'react'
import Stchild from "./stchild.js"


export class Stparent extends Component {
  render() {
    const task =[
    {name:'Write for Evato tuts',duration:120},
    {name:'Work Out','duration':60},
    {name:'Procrastinate on Dulingo',duration:240}];
    return (
      <div>
        <h1>State class Component</h1>
        <Stchild task01={task}/>
      </div>
    )
  }
 }


export default Stparent
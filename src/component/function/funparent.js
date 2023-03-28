import React, { useState } from 'react'
import Funchild from "./funchild.js"

const Funparent = () => {
    let employees = [ 
        { 
          "id": 11,
           "name":"Abinesh",
            "salary":50000
         },
     {
       "id": 2131,
        "name":"vellasamy",
         "salary":40000
       },
     { 
      "id": 3012,
       "name":"Rama",
        "salary":30000 
    }]

    const[mobile,setApple]=useState(employees)

     var kind=()=>{
       
        let swim=employees.filter((value)=>{
            return value.salary > 60000  ;
           
        })

      setApple(swim);
    }
    var name=(a,b)=>{
         let sky=employees.filter((value,index)=>{
            return a.salary <= value.salary;
         })
         console.log(sky);
    }

    var vel=()=>{
      let s=[ 
        { 
           "name":"samy",
            "salary":7000
         },
     {
        "name":"vis",
         "salary":6000
       },
     { 
       "name":"vell",
        "salary":3000 
    }]
    setApple(s)
    }

  return (
    <div><button onClick={()=>vel()}> click</button>
   <button onClick={()=>kind()}> click</button>
      {mobile.map((value,index)=>
      <>
         <h1> {value.name}</h1>
         <h2> {value.salary}</h2>
         </>
  )}
    <Funchild pas={employees} pas2={name} />

    </div>
  )
}

export default Funparent
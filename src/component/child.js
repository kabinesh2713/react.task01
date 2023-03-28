import React from 'react'

const Child = (props) => {
    let result=props.Year;
    console.log(result);
  return (
    <div>
<button onClick={()=>result.filter(function(a){
    if(a.year<2014){
        console.log(a.year);
    }
})}>Click</button>
    </div>
  )
}
export default Child



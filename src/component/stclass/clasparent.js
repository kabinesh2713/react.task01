import React, { Component } from 'react'

export class Clasparent extends Component {
     constructor(){
        super()
        this.state ={
            mobiles : [{
                id:"1234",
                name :"oneplus",
                price : 50000,
                isPurchased: true
            },
                {
                id:"12345",
                name : "Vivi Y73",
                price : 22999,
                isPurchased: false
            },
                {
                id:"123456",
                name : "Redmi 14pro",
                price : 26999,
                isPurchased : true
            },
                {
                id:"12346",
                name : "iphone 14 pro",
                price : 145000,
                isPurchased : false
            },
                {
                id:"12347",
                name : "Nokia 10pro",
                price : 17000,
                isPurchased : true
            },
                {
                id:"12348",
                name : "Poco x2",
                price : 15998,
                isPurchased : true
            },
            {
                id:"1234569",
                name :"Moto G4plus",
                price :10998,
                isPurchased : true
            }
            ]
        }
     }
     ascending = () => {
        var names = this.state.mobiles.sort((a,b) => {
        let frstObj = a.name.toLowerCase();
        let secObj = b.name.toLowerCase();
        if(frstObj < secObj){
            return -1;
        }else if(frstObj > secObj){
            return 1;
        }    
      })
      this.setState({mobiles: names});
}


descending = () =>{
var names = this.state.mobiles.reverse()
this.setState({mobiles: names});
}

ascPrice = () => {
    var price =  this.state.mobiles.sort((a,b) => {
         return a.price - b.price;
     })
     this.setState({mobiles:price});
 }
 dscPrice = () => {
 var price = this.state.mobiles.reverse();
 this.setState({mobiles:price});
 }
 
 purchase = () => {
 this.setState(
 {mobiles: this.state.mobiles.filter((e) => {
 if(e.isPurchased === true){
   return e.name;
 }
 })}
 );
 
 };


render() {

return (
<div>
<button onClick={() => this.ascending()}>Model</button>
<button onClick={() => this.descending()}>new model</button>
<button onClick={() => this.ascPrice()}>Price</button>
<button onClick={() => this.dscPrice()}>DescountPrice</button>
<button onClick={() => this.purchase()}>Purchase</button>


{this.state.mobiles.map((value,index) => {
    return  <h1 key={index}>{value.name} : {value.price} </h1>
})}

</div>
)
};
}

export default Clasparent
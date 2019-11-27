import React from 'react';


class CardApp extends React.Component{
  state={
    counter:0,
  }
  
  handleUpdate = () =>{
    
    console.log("I'll update",this.state)

    this.setState({
      counter:5
    })
  }
  render(){
    console.log(this.state,"STATE")
    return(
    <div>
      Counter : {this.state.counter}
      <button onClick={this.handleUpdate} >Update</button>
    </div>
    )
  }
}

export default CardApp;
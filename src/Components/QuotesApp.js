import React from 'react';

import Card from "./Card";
import axios from "axios";

class QuotesApp extends React.Component {

  state={
    quoteArray: [
      {
        id: "01",
        content: "Do or Die",
        author: "Amar"
      },
      {
        id: "02", 
        content: "It's not about perfect. It's about effort.",
        author: "Jyoti"
      },
      {
        id: "03",
        content: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill"
      }
    ],
    quoteText: "",
    authorText: "",
    selectedColor: "",
  }

  componentDidMount(){
      console.log("I am mounting!")

      axios.get('https://api.quotable.io/quotes').then((res)=>{
            console.log(res.data,"Response from api")
            this.setState({
              quoteArray:res.data.results
            })
      })

  }

  updateInputs=(e)=>{
    console.log("updateInputs is working!",e.target.name, e.target.value);
    if(e.target.name === "quotetxt"){
      this.setState(
        {quoteText: (e.target.value)},()=>{
          console.log("Logged after state update",this.state); 
        }
      )
    }
    else{
      this.setState(
        {
          authorText: e.target.value
        },()=>{
          console.log("Logged after state update",this.state); 
        }
      )     
    }
   
  }

  addNewQuote= (passd)=>{
    console.log("submit button pressed!",passd);
    let ar= this.state.quoteArray;
    const newQuote = {content: this.state.quoteText, author: this.state.authorText};
    console.log("new quote:", newQuote);
    ar.push(newQuote);
    this.setState({quoteArray: ar}, ()=>{console.log("state array:", this.quoteArray)});
  }

  deleteQuote= (e)=> {
    console.log("delete triggered for index: ",e);
    const newArray = this.state.quoteArray.filter((item,index) => 
      index !== e)
    this.setState({quoteArray: newArray}, ()=>{console.log(this.quoteArray,"newArray")})
  }

  render(){
    return(
      <div className="parent">
        <div className="card">
          <div className="quote">
            Quote: 
            <input 
              type="text" 
              name="quotetxt" 
              onChange={this.updateInputs} />
          </div>
          <div className="author">
            Author: 
            <input 
              type="text" 
              name="authortxt" 
              onChange={this.updateInputs} />
          </div>
          <button 
            type="button" 
            onClick={()=>{ 
                console.log("I am latekachu");this.addNewQuote("hey")}
              }>
            Submit
          </button>
        </div>
        {this.state.quoteArray.map((item,i)=>
          <Card 
          idx={i} 
          quotes={item.content} 
          author={item.author} 
          dltfunc={this.deleteQuote}
          />
         )}
      </div>
    );
  }  
}

export default QuotesApp;
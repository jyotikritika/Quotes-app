import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Card from "./Components/Card";
import CardForm from "./Components/CardForm";
import CardApp from './Components/CardApp'
const quoteArray = [
  {
    quotes: "Do or Die",
    author: "Amar"
  },
  {
    quotes: "It's not about perfect. It's about effort.",
    author: "Jyoti"
  },
  {
    quotes: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  }
];
handleSetQuote = (quote) =>{
  // {
  //   qoute:'dfaksjdf',
  //   author:"fjskjdf"
  // }

}
function App() {
  return (
    <div className="App">
      <CardApp/>
      {/* <CardForm setQuote={handleSetQuote} />
      {quoteArray.map((cards)=> 
        <Card quotes={cards.quotes} author={cards.author}/>)
      }; */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

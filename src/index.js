import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import QuotesApp from "./Components/QuotesApp";

function App() {
  return (
    <div className="App">
      <QuotesApp/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

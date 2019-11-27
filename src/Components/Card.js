import React from "react";

function Card(props) {
  return (
    <div>
      <button className="card" onClick={()=>{props.dltfunc(props.idx)}}>
      <div className="content">
        <div className="quote">{props.quotes || "Quote!!"}</div>
        <div className="author">- {props.author || "Anonymous"}</div>
      </div>
      </button>
    </div>
  );
}



export default Card;

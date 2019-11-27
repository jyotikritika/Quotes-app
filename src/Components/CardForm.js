import React from 'react';

function CardForm() {
  
  return(
    <div className="card">
      <div className="quote">
        Quote: <input type="text" id="quoteTxt"/>
      </div>
      <div className="author">
        Author: <input type="text" id="authorTxt"/>
      </div>
      <button type="button" onClick={printVal}>
        Submit
      </button>
    </div>
  );
}

function printVal() {
  console.log(document.getElementById('quoteTxt').);
  console.log(document.getElementById('authorTxt'));
}

export default CardForm;
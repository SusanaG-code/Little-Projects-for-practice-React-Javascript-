import "../stylesheets/App.css";
import React, { useState } from "react";
import like from "../images/like.svg";
import dislike1 from "../images/dislike2.png";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <Header />
      <div className="btns-box">
        <button className="btn" onClick={handleIncrement}>
          <img alt={like} src={like} className="logo"></img>
          <span className="span">{count}</span>
        </button>
        <button className="dislike-btn" onClick={handleDecrement}>
          <img className="dislike" alt={dislike1} src={dislike1}></img>
        </button>
      </div>
    </div>
  );
}

export default App;

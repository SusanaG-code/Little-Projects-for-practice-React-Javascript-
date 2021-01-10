import React from "react";
import "../stylesheets/Quotes.css";

const Quotes = (props) => {
  const handleClick = (ev) => {
    const click = ev.currentTarget.value;
    props.handleClick(click);
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
        <p>
          <span className="quote">Quote:</span> <span>{props.quote}</span>
        </p>
      </div>
      <div id="author" className="author">
        <p>
          <span className="author-title">Character:</span>{" "}
          {props.character.name}
        </p>
      </div>
      <div id="house" className="house">
        <p>
          <span className="house-title">House:</span> {props.house}
        </p>
      </div>

      <div id="buttons" className="btn">
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};
Quotes.propTypes = {};
export default Quotes;

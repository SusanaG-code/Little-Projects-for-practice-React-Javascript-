import React, { useEffect, useState } from "react";
import Quotes from "./Quotes";
import api from "./services/api";
import "../stylesheets/App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setQuote(data.sentence);
      setCharacter(data.character);
      setHouse(data.character.house.name);
    });
  }, []);
  const handleClick = () => {
    api.getDataFromApi().then((data) => {
      setQuote(data.sentence);
      setCharacter(data.character);
      setHouse(data.character.house.name);
    });
  };

  return (
    <div className="App">
      <div className="main-box">
        <div className="title-box">
          <h1 className="title">Choose your Game of Thrones Quote</h1>
        </div>
        <Quotes
          quote={quote}
          character={character}
          house={house}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;

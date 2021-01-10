import Form from "./Form";
import api from "../service/api";
import "../stylesheets/App.css";
import React, { useEffect } from "react";

function App(props) {
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="todoapp stack-large">
      <h1>Todo List on React</h1>
      <h3>Autor</h3>
      <p>Quote</p>
      <button type="button">Find some inspiration for today</button>
      <Form />
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      ></ul>
    </div>
  );
}

export default App;

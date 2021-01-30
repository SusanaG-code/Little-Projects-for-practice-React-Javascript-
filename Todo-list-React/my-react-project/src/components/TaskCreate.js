import "./TaskCreate.css";
import React, { useState } from "react";

const TaskCreate = (props) => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(11);

  const clickButton = (ev) => {
    console.log("clickado");
    props.handleCreate(subject, date);
  };

  const changeSubject = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setSubject(newValue);
  };

  const changeDate = (ev) => {
    setDate(parseInt(ev.currentTarget.value));
  };
  return (
    <div>
      <section className="new__fill">
        <input
          type="text"
          onChange={changeSubject}
          className="input-text"
          placeholder="What needs to be done"
        ></input>
        <input
          type="number"
          onChange={changeDate}
          className="input-number"
          placeholder="Deadline"
        />
        <div>
          <button className="new__fill--button" onClick={clickButton}>
            Add task
          </button>
        </div>
      </section>
    </div>
  );
};
TaskCreate.propTypes = {};
export default TaskCreate;

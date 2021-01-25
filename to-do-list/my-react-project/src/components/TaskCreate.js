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
        <input type="text" onChange={changeSubject}></input>
        <input type="number" onChange={changeDate} />
        <div>
          <button className="new__fill--button" onClick={clickButton}>
            Añadir tarea
          </button>
        </div>
      </section>
    </div>
  );
};
TaskCreate.propTypes = {};
export default TaskCreate;

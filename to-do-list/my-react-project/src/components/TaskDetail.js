import "./TaskDetail.css";
import React, { useState } from "react";

const TaskDetail = (props) => {
  const [styleTask, setStyleTask] = useState("pending");
  const clickTask = (ev) => {
    console.log("he hecho click");
    setStyleTask(styleTask === "done" ? "pending" : "done");
  };

  const styleDate = props.date <= 11 ? "hurry" : "";

  return (
    <div className={styleTask}>
      <input
        type="checkbox"
        name="task"
        id="task"
        checked="{false}"
        onChange={clickTask}
      ></input>
      <label htmlFor="t1">{props.subject}</label>
      <span className={`"clase"+ ${styleDate}`}>{props.date}nov</span>
    </div>
  );
};
TaskDetail.propTypes = {};
export default TaskDetail;

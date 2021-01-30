import "../stylesheets/App.css";
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";

function App(props) {
  const initialData = [
    { subject: "Practicar React", date: 11 },
    { subject: "Practicar Javascript", date: 11 },
    { subject: "Practicar Node", date: 12 },
  ];

  const [taskList, setTaskList] = useState(initialData);

  const handleCreate = (newSubject, newDate) => {
    const newTask = { subject: newSubject, date: newDate };
    setTaskList([...taskList, newTask]);
  };
  return (
    <div className="App">
      <header class="header"></header>
      <main className="container">
        <h3>To-do List</h3>
        <TaskList data={taskList}></TaskList>
        <TaskCreate handleCreate={handleCreate}></TaskCreate>
      </main>
    </div>
  );
}

export default App;

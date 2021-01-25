import TaskDetail from "./TaskDetail";

const TaskList = (props) => {
  console.log(props.data);

  const htmlList = props.data.map((eachTask, index) => (
    <li key={index}>
      <TaskDetail
        subject={eachTask.subject}
        date={eachTask.date}
        id={index}
      ></TaskDetail>
    </li>
  ));

  return (
    <div>
      <ul>{htmlList}</ul>
    </div>
  );
};
TaskList.propTypes = {};
export default TaskList;

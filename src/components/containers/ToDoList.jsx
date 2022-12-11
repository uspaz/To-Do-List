import React, { useState } from "react";
import AddToDo from "../AddToDo";
import ClearToDo from "../ClearToDo";
import "../../styles/ToDoStyles.css";
import Task from "../Task";

const ToDoList = () => {
  const [taskList, setTaskList] = useState([]);

  const createTask = (data) => {
    data.id = taskList.length + 1;
    setTaskList([...taskList, data]);
  };

  const completedTask = (id) => {
    let check = taskList.find((el) => el.id === id);
    check.completed = !check.completed;
    setTaskList([...taskList]);
  };

  const deleteTasks = () => {
    setTaskList([]);
  };

  return (
    <article className="todo-container">
      <h1>Daily To Do List</h1>
      <AddToDo createTask={createTask} />
      {taskList.length > 0 ? (
        <ul className="list-tasks">
          {taskList.map((el) => (
            <Task key={el.id} task={el} complete={completedTask} />
          ))}
        </ul>
      ) : (
        <p className="first-task">Create your first task</p>
      )}
      <hr style={{ border: "none", borderTop: "1px solid #eeeeee" }} />
      <ClearToDo deleteTasks={deleteTasks} taskList={taskList} />
    </article>
  );
};

export default ToDoList;

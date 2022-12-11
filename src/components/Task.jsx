import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Task = ({ task, complete }) => {
  return (
    <li className="task">
      <button
        className={`btn-completed ${task.completed ? "completed" : ""}`}
        onClick={() => complete(task.id)}
      >
        {task.completed && <IoCheckmark />}
      </button>
      <label className={task.completed ? "label-completed" : ""}>
        {task.task}
      </label>
    </li>
  );
};

export default Task;

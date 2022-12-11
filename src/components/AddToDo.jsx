import React, { useState } from "react";

const initialTask = {
  id: null,
  task: "",
  completed: false,
};

const AddToDo = ({ createTask }) => {
  const [task, setTask] = useState(initialTask);

  return (
    <div className="todo-tasks">
      <input
        type="text"
        name="task"
        placeholder="Add new list item"
        value={task.task}
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
      />
      <button
        className="cta-add"
        onClick={() => {
          createTask(task);
          setTask(initialTask);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddToDo;

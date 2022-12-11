import React from "react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const ClearToDo = ({ deleteTasks, taskList }) => {
  const [isOpen, openClearAll, closeClearAll] = useModal(false);

  let completed = taskList.filter((el) => el.completed === true).length;

  return (
    <div className="cta">
      <p className="items-completed">
        {completed > 0 ? completed : "0"} {completed > 0 ? "tasks" : "task"}{" "}
        completed
      </p>
      <button className="clear-all" onClick={openClearAll}>
        Clear All
      </button>
      <Modal isOpen={isOpen} close={closeClearAll}>
        <h3 className="clear-title">¿Estás seguro/a?</h3>
        <p>Todos los elementos de tu lista se eliminarán</p>
        <div>
          <button
            className="clear-btn"
            onClick={() => {
              deleteTasks();
              closeClearAll();
            }}
          >
            Eliminar
          </button>
          <button className="clear-btn" onClick={closeClearAll}>
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ClearToDo;

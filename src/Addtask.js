import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const Addtask = ({ AddNewTask, setAddNewTask, handleSubmit }) => {

  const inputRef = useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addtask">Add item</label>
      <input
        ref={inputRef}
        autoFocus
        id="addtask"
        type="text"
        placeholder="Add Task & Click On +"
        required
        value={AddNewTask}
        onChange={(e) => setAddNewTask(e.target.value)}
      />
      <button type="submit" aria-label="Add_task" onClick={()=>inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default Addtask;

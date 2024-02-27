import React from "react";
import { FiTrash2 } from "react-icons/fi";

const LineItems = ({ newItem, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={newItem.id}>
      <input
        type={"checkbox"}
        onChange={() => handleCheck(newItem.id)}
        checked={newItem.checked1}
      />
      <label
        style={newItem.checked1 ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(newItem.id)}
      >
        {newItem.spot}
      </label>
      <FiTrash2
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(newItem.id)}
        aria-label={`Delete ${newItem.spot}`}
      />
    </li>
  );
};

export default LineItems;

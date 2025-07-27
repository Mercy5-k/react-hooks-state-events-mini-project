import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <span>{text}</span> — <em>{category}</em>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;

import React from 'react';

const TodoItem = ({ text, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span>{text}</span>
      <button
        className="text-red-500"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

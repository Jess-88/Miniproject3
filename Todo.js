import React from 'react';
import './style.css';

function Todo({ todo }) {
  const style = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? '#888' : '#000'
  };

  return (
    <div className="todo-item">
      <p className="todo-text" style={style}>
        {todo.text}
      </p>
    </div>
  );
}

export default Todo;

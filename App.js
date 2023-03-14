import React, { useState } from 'react';
import TodoList from './TodoList';
import './style.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTodo() {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue('');
    }
  }

  return (
    <div className="app">
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

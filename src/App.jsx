import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from './Title';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      setTodo('');
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todo,
      },
    ]);
    setTodo('');
  };

  const handleRemoveTodo = (key) => {
    const newTodos = todos.filter((value) => value.id !== key);
    setTodos(newTodos);
  };

  return (
    <div>
      <Title />
      <AddTodo
        todo={todo}
        handleInputTodo={handleInputTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
}
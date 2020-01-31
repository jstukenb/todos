import React, { useState } from 'react';
import TodoList from './TodoList'
import TodoEntryForm from './TodoEntryForm'

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Finish todo app'},
    {id: 2, content: 'eat dinner'},
  ]);
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}
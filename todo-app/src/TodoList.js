import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //Creates a new todo
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  //Updates a todo
  const update = (id, editedTodo) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, todo: editedTodo} : todo));
  };

  //Removes a todo
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const components = todos.map(todo => (
    <Todo 
      key={todo.id} 
      id={todo.id} 
      todo={todo.todo} 
      update={update} 
      remove={remove} 
      />
  ));

  return (
    <>
      <NewTodoForm createTodo={create} />
      <ul>{components}</ul>
    </>
  );
}

export default TodoList;
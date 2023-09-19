import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm({createTodo}) {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const getInput = e => {
    e.preventDefault();
    createTodo({todo, id: uuidv4()});
    setTodo("");
  };

  return (
    <>
      <form onSubmit={getInput}>
        <label htmlFor="todo">Todo: </label>
        <input id="todo" name="todo" type="text" value={todo} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default NewTodoForm;
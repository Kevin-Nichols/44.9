import React, { useState } from "react";

function Todo(
  {todo="default thing todo", 
  id="1", 
  remove, 
  update}
  ) {
  const [editTodo, setEditTodo] = useState(todo);
  const [editing, setEditing] = useState(false);
  
  const handleChange = e => {
    setEditTodo(e.target.value);
  };

  const editOnOff = () => {
    setEditing(edit => !edit);
  };

  const handleRemove = () => remove(id);

  const handleUpdate = e => {
    e.preventDefault();
    update(id, editTodo);
    setEditing(false);
  };

  //Normale JSX
  let todoJsx = (
    <>
      <li>{todo}</li>
      <button onClick={editOnOff}>Edit Todo</button>
      <button onClick={handleRemove}>X</button>
    </>
  );

  //JSX if editing
  if(editing) {
    todoJsx = (
      <>
        <form onSubmit={handleUpdate}>
          <input type="text" onChange={handleChange} value={editTodo} />
          <button>Update Todo</button>
        </form>
      </>
    );
  };

  return todoJsx;
}

export default Todo;
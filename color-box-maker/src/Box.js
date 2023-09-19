import React from "react";
import './Box.css'

function Box({
  id, 
  height=4, 
  width=4, 
  backgroundColor="green", 
  handleDelete
}) {
  const deleteBox = () => handleDelete(id);

  return (
    <>
      <div style={{height: `${height}em`, 
                   width: `${width}em`, 
                   backgroundColor
           }}
           className="Box-Div"
      />
      <button className="Box-Button" style={{width: `${width}em`, backgroundColor}} onClick={deleteBox}>X</button>
    </>
  );
}

export default Box
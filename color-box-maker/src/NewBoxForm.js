import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewBoxForm.css'

function NewBoxForm({handleAdd}) {
  const [data, setData] = useState({height: "", width: "", backgroundColor: ""});

  const handleChange = e => {
    const {name, value} = e.target;
    setData(data => ({...data, [name]: value}));
  };

  const getInput = e => {
    e.preventDefault();
    handleAdd({...data, id: uuidv4()});
    setData({height: "", width: "", backgroundColor: ""});
  };

  return (
    <>
      <form onSubmit={getInput}>
        <div>
          <label className="Form-Label" htmlFor="height">Height: </label>
          <input 
            id="height"
            type="text"
            name="height"
            value={data.height}
            onChange={handleChange}
            className="Form-Input"
          />
        </div>
        <div>
          <label className="Form-Label" htmlFor="width">Width: </label>
          <input 
            id="width"
            type="text"
            name="width"
            value={data.width}
            onChange={handleChange}
            className="Form-Input"
          />
        </div>
        <div>
          <label className="Form-Label" htmlFor="backgroundColor">Background Color: </label>
          <input 
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={data.backgroundColor}
            onChange={handleChange}
            className="Form-Input"
          />
        </div>
        <button className="Form-Button" id="formButton">Add a box</button>
      </form>
    </>
  );
}

export default NewBoxForm;
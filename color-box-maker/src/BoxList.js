import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = newBox => {setBoxes(boxes => [...boxes, newBox]);
  };
  const deleteBox = id => {setBoxes(boxes => boxes.filter(b => b.id !== id));
  };

  const components = boxes.map(b => (
    <Box key={b.id} 
         id={b.id} 
         height={b.height} 
         width={b.width} 
         backgroundColor={b.backgroundColor} 
         handleDelete={deleteBox}
    />
  ));

  return (
    <>
      <NewBoxForm handleAdd={addBox} />
      {components}
    </>
  );
}

export default BoxList;
import { useState } from "react";
function State() {
  // let counter = 5;
  let [counter, setCounter] = useState(5); // here we give default value
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("value added ", counter);
  };
  const removeValue = () => {
    counter = counter > 0 ? counter - 1 : counter;
    setCounter(counter);
    console.log("value deleted ", counter);
  };

  return (
    <>
      <div>Creat Hooks tutorial</div>
      <h1> Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default State;

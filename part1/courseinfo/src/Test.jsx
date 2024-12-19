import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Test = () => {

  //Event Listeners
  const [counter, setCount] = useState(0);
  console.log("rendering with counter value", counter)

  //METHOD 1
  // const handleClick = () => {
  //   setCount(counter + 1);
  //   return counter
  // }

  //METHOD 3
  const increaseByOne = () =>{
    console.log("increasing, value before", counter)
    setCount(counter + 1);
  } 
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter)
    setCount(counter - 1);
  } 
  const setToZero = () => {
    console.log("resetting to zero, value before", counter)
    setCount(0);
  } 

  return (
    <>
      <div>
        <Display counter={counter} />
        {/* METHOD 1 */}
        {/* <button onClick={handleClick}>+</button> */}
        
        {/* METHOD 2 */}
        {/* <button onClick={() => setCount(0)}>Reset</button> */}
      <Button 
        onClick={increaseByOne}
        text="+"
      />
      <Button 
        onClick={decreaseByOne}
        text="-"
      />
      <Button 
        onClick={setToZero}
        text="Reset"
      />
      
      </div>
    </>
  )
}

export default Test;
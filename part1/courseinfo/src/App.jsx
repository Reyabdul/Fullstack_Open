import { useState } from "react";
import Test2 from "./Test2.jsx"


const Header = (props) => {
  // console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  // console.log(props)
  return (
    <div>
      <p>
        {props.parts}
      </p>

    </div>
  );
};

const Content = (props) => {

  // console.log(props)
  return (
    <div>
      <Part parts={`${props.parts[0].name} ${props.parts[0].exercise}`} />
      <Part parts={`${props.parts[1].name} ${props.parts[1].exercise}`} />
      <Part parts={`${props.parts[2].name} ${props.parts[2].exercise}`} />
    </div>
  );
};

const Total = (props) => {
  
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}
        </p>
    </div>
  )
}

function App() {

  //const-definitions
  const course = {
    name:   "Half Stack application development",
    parts: [
      { 
        name: "Fundamentals of React", 
        exercise: 10 
      },
      { 
        name: "Using props to pass data", 
        exercise: 7 
      },
      { 
        name: "State of a component", 
        exercise: 15 
      }
    ]
  }
    






  return (
    <div>
      {/* <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} /> */}
      <Test2 />
    </div>
  );
}

export default App;

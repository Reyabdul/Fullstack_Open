import { useState } from "react";

// import './App.css'

const Course = ({ courses }) => {

  // console.log(courses)
  const header = courses[0].name;
  const parts = courses.map(part => {
    return part
  })

  return (
    <div>
      <Header header={header} />
      <Content parts={parts} />
      {/* <Total parts={parts} /> */}
    </div>
  );
};

const Header = ({ header }) => {
  // console.log(courseHeader)
  return <h1>{header}</h1>;
};

const Content = ({ parts }) => {
  // console.log(parts[0])


  // const part1 = <>{`${partData[0].name} ${partData[0].exercises}`}</>;

  // const part1 = <>{`${parts[0].name} ${parts[0].exercise}`}</>;
  // const part2 = <>{`${parts[1].name} ${parts[1].exercise}`}</>;

  return (
    <div>
      {/* <Part part1={part1} /> */}
      {/* <Part part2={part2} />
      <Part part3={part3} /> */}
    </div>
  );
};

// const Part = ({part1, part2, part3}) => {
//   return (
//     <div>
//       <p>{part1}</p>
//       <p>{part2}</p>
//       <p>{part3}</p>
//     </div>
//   )
// }

// const Total = ({parts}) => {

//   // console.log({parts})
//   const total = parts.reduce((s, p) => {
//     return s + p.exercise
//   }, 0)

//   // const check = parts.map(p => console.log(p))

//   // console.log(total)

//   return (
//     <div>
//       <p>
//         {/* total of {(parts[0].exercise + parts[1].exercise + parts[2].exercise)} exercises */}
//       </p>
//     <p>total of {total} exercises</p>
//     </div>
//   )
// }

function App() {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <Course courses={courses} />
    </>
  );
}

export default App;

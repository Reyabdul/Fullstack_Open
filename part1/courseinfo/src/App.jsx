const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  

  

  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>

  )
}

const Content = () => {
  const parts = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 15 },
  ]
  return (
    <div>
      <Part part={`${parts[0].part} ${parts[0].exercise}`}/>
      <Part part={`${parts[1].part} ${parts[1].exercise}`}/>
      <Part part={`${parts[2].part} ${parts[2].exercise}`}/>
    </div>
  );
};

function App() {
  
  //const-definitions
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content />
    </div>
  );
}

export default App;

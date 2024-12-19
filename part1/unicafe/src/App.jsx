import { useState } from "react"

const Header = ({ pageTitle, statsTitle }) => {
  // console.log(pageTitle)
  return (
    <>
        <h1>{pageTitle}</h1>
        <h1>{statsTitle}</h1>
    </>

  )
}

const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

function App() {

  const pageTitle = "Give Feedback"
  const statsTitle = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <Header pageTitle={pageTitle}/>
      <Button text="Good"/>
      <Button text="Neutral"/>
      <Button text="Bad"/>

      <Header statsTitle={statsTitle} />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

    </div>
  )
}

export default App

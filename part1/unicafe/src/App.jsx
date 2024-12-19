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

const Button = ({ onClick ,text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {

  const pageTitle = "Give Feedback"
  const statsTitle = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Header pageTitle={pageTitle}/>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>

      <Header statsTitle={statsTitle} />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

    </div>
  )
}

export default App

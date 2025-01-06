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

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      Total Review: {props.allClicks.length}
    </div>
  )
}

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         0
//       </div>
//     )
//   }

//   return (
//     <div>
//       Total Review: {props.allClicks.length}
//     </div>
//   )
// }

function App() {

  const pageTitle = "Give Feedback"
  const statsTitle = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setAllClicks(allClicks.concat("G"))
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)    
  }

  const handleNeutralClick = () => {
    setAllClicks(allClicks.concat("N"))
    const updateNeutral = neutral + 0
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const handleBadClick = () => {
    setAllClicks(allClicks.concat("B"))
    const updateBad = bad - 1;
    setBad(updateBad)
    setTotal(good + bad + updateBad)
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
      <p>Total {total}</p>
      <Statistics allClicks={allClicks}/>
      <p>Average {(total/allClicks.length)}</p>
      <p>
        Postive {good/allClicks.length}
      </p>

    </div>
  )
}

export default App

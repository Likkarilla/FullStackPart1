import { useState } from 'react'

const Statistics = (props) => {
  if (props.All === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <p>good {props.Good}</p>
      <p>neutral {props.Neutral}</p>
      <p>bad {props.Bad}</p>
      <p>all {props.All}</p>
      <p>average {props.Average}</p>
      <p>positive {props.Positive}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const hyva = () => {
    console.log("Hyvä arvosana annettu")
    setGood(good + 1)
  }

  const semi = () => {
    console.log("Neutraali arvosana annettu")
    setNeutral(neutral + 1)
  }

  const huono = () => {
    console.log("Huono arvosana annettu")
    setBad(bad + 1)
  }

  const summa = good + neutral + bad
  const keskiarvo = summa / 3
  const positiivisia = summa === 0 ? 0 : (good / summa) * 100


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={hyva}>good</button>
      <button onClick={semi}>neutral</button>
      <button onClick={huono}>bad</button>

      <h2>statistics</h2>
      <Statistics
        Good={good}
        Neutral={neutral}
        Bad={bad}
        All={summa}
        Average={keskiarvo}
        Positive={positiivisia}
      />
    </div>
  )
}

export default App
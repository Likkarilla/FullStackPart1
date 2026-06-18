import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.yhteensa === 0) {
    return (
      <p>Ei palautteita</p>
    )
  }

  return (
    <div>
      <table>
        <tr>
          <td> <StatisticLine text="good" value={props.goodarvostelu}></StatisticLine> </td>
        </tr>
        <tr>
      <td><StatisticLine text="neutral" value={props.neutralarvostelu} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={props.badarvostelu} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="yhteensä" value={props.summa} /></td>
        </tr>
        <tr><StatisticLine text="keskiarvo" value={props.ka + " %"} /></tr>
      </table>
          </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const yhteensa = good + neutral + bad
  const keskiarvo = yhteensa === 0 ? 0 : (good / yhteensa) * 100


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...',
    'Any fool can write code that a computer can understand.',
    'Premature optimization is the root of all evil.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // 2. Voting and Randomizing Logic
  const handleVote = () => {
    const copy = [...votes] // Copy to update state correctly
    copy[selected] += 1
    setVotes(copy)
  }

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length) //
    setSelected(randomIndex)
  }

  // 3. Find top anecdote
  const maxVotes = Math.max(...votes)
  const bestAnecdoteIndex = votes.indexOf(maxVotes)


  return (
    <div>
      <h2>Anna palautetta</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      
      <h2>Tilastot</h2>
      <Statistics 
        goodarvostelu={good} 
        neutralarvostelu={neutral} 
        badarvostelu={bad} 
        summa={yhteensa} 
        yhteensa={yhteensa}
        ka={keskiarvo} 
      />
       <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      
      <h1>Anecdote with most votes</h1>
      {maxVotes === 0 ? <p>No votes yet</p> : <p>{anecdotes[bestAnecdoteIndex]}</p>}
    </div>
    </div>
  )
}

export default App
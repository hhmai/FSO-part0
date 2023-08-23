import { useState } from 'react'

const Button = ({eventhandler, text}) => {
  return (
    <button onClick={eventhandler}>
      {text}
    </button>
  )
}

const randomInt = (max) => {
  return (
    Math.floor(Math.random() * max)
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const randomElement = () => setSelected(randomInt(8))

  const getVotes = () => {
    const votes_copy = [...votes]
    votes_copy.splice(selected, 1, votes_copy[selected]+1)
    return (
      setVotes(votes_copy)
    )
  }
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  console.log(votes.indexOf(Math.max(...votes)))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]}</p>
      <Button eventhandler={getVotes} text={'vote'}/>
      <Button eventhandler={randomElement} text={'next anecdote'}></Button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

export default App
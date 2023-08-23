import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
    </tbody>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good+bad+neutral == 0) {
    return (
      <div><p>No feedback given</p></div>
    )
  }
  return (
  <div>
    <h2>statistics</h2>
    <table>
    <StatisticLine text='good' value={good}/>
    <StatisticLine text='neutral' value={neutral}/>
    <StatisticLine text='bad' value={bad}/>
    <StatisticLine text='all' value={good + neutral + bad}/>
    <StatisticLine text='average' value={(good-bad)/(good + neutral + bad)}/>
    <StatisticLine text='positive' value={(good*100)/(good + neutral + bad)}/>
    </table>
  </div>
  )
}

const App = () => {
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        handleClick={increaseGood}
        text='good' />
      <Button
        handleClick={increaseNeutral}
        text='neutral' />
        <Button
        handleClick={increaseBad}
        text='bad' />
        <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
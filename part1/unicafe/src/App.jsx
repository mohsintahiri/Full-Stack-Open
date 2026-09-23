import { useState } from 'react'
import Button from './Button'
import Title from './Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const average = (good * 1 + bad * (-1)) / (good + neutral + bad)
  const positivePercentage = good * 100/ (good + neutral + bad)

  return (
    <>
      <Title text="unicafe" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Title text="statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Average: {isNaN(average)? "There's no reviews, leave at least one to show the average" : average.toFixed(2)}</p>
      <p>Positive: {isNaN(positivePercentage)? "There's no reviews, leave at least one to show the positive percentage" : positivePercentage.toFixed(2)}%</p>
    </>
  )
}

export default App
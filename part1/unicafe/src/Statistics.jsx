import Title from "./Title"

const Statistics = ({good, neutral, bad})=>{
  const average = (good * 1 + bad * (-1)) / (good + neutral + bad)
  const positivePercentage = good * 100/ (good + neutral + bad)

  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No feedback given</p>
  }

  return(
    <div>
      <Title text="statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positivePercentage.toFixed(2)}%</p>
    </div>
  )
}

export default Statistics
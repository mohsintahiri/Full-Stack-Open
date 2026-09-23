import Title from "./Title"

const Statistics = ({good, neutral, bad})=>{
  const average = (good * 1 + bad * (-1)) / (good + neutral + bad)
  const positivePercentage = good * 100/ (good + neutral + bad)

  return(
    <div>
      <Title text="statistics" />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Average: {isNaN(average)? "There's no reviews, leave at least one to show the average" : average.toFixed(2)}</p>
      <p>Positive: {isNaN(positivePercentage)? "There's no reviews, leave at least one to show the positive percentage" : positivePercentage.toFixed(2)}%</p>
    </div>
  )
}

export default Statistics
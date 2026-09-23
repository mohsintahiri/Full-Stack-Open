import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad})=>{
  const average = (good * 1 + bad * (-1)) / (good + neutral + bad)
  const positivePercentage = good * 100/ (good + neutral + bad)

  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No feedback given</p>
  }

  return(
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={average.toFixed(2)}/>
      <StatisticLine text="positivePercentage" value={String(positivePercentage.toFixed(2)) + " %"}/>
    </div>
  )
}

export default Statistics
import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad})=>{
  const total = good + neutral + bad 
  const average = (good * 1 + bad * (-1)) / total
  const positivePercentage = good * 100/ total

  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No feedback given</p>
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(2)}/>
        <StatisticLine text="positive" value={String(positivePercentage.toFixed(2)) + " %"}/>
      </tbody>
    </table>
  )
}

export default Statistics
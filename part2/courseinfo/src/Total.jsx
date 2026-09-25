const Total = (props) => {
  let total = 0;
  props.course.parts.forEach(element => total += element.exercises)
  return (
    <p>Number of exercises {total}</p>    
  )
}

export default Total
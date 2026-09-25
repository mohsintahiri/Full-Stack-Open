import Part from "./Part"

const Content = (props) => {
  return(
    <div>
      {props.course.parts.map(element => (
        <Part
          name={element.name}
          exercises={element.exercises}
        />
      ))}
    </div>
  )
}

export default Content
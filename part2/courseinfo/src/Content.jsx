import Part from "./Part"

const Content = (props) => {
  return(
    <div>
      {props.course.parts.map(element => (
        <Part key={element.id}
          name={element.name}
          exercises={element.exercises}
        />
      ))}
    </div>
  )
}

export default Content
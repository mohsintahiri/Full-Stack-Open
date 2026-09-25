const Total = ({course}) => <p>Number of exercises {course.parts.reduce((acumulador, numero) => acumulador + numero.exercises, 0) }</p>    

export default Total
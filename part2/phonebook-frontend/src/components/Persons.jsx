import personService from '../services/persons'

const Persons = ({personsToShow, persons, setPersons, setNotificationMessage, setNotificationType})=>{
  const handleDeletePerson = (p) => 
    personService
    .deletePerson(p.id)
    .then(() =>{
      setPersons(persons.filter(person => person.id !== p.id))
      setNotificationMessage(`${p.name} has been deleted.`)
      setNotificationType('successType')
      setTimeout(() => {
        setNotificationMessage(null)
        setNotificationType('null')
      }, 5000)
    })
    .catch(error => {
          setPersons(persons.filter(person => person.id !== p.id))
          setNotificationMessage(`${p.name} was already deleted from the server`)
          setNotificationType('errorType')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType('null')
          }, 5000)
        })
      
  return  <ul>
            {personsToShow.map(p => <li key={p.id}>{p.name} {p.number} <button onClick={()=> confirm(`Are you sure you want to delete ${p.name}?`)?handleDeletePerson(p):undefined}>delete</button></li>)}
          </ul>
}

export default Persons
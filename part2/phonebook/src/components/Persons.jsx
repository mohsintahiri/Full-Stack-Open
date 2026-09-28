import personService from '../services/persons'

const Persons = ({personsToShow, persons, setPersons})=>{
  const handleDeletePerson = (id) => 
    personService
    .deletePerson(id)
    .then(() =>
      setPersons(persons.filter(person => person.id !== id
    )))
      
  return  <ul>
            {personsToShow.map(i => <li key={i.id}>{i.name} {i.number} <button onClick={()=> confirm(`Are you sure you want to delete ${i.name}?`)?handleDeletePerson(i.id):undefined}>delete</button></li>)}
          </ul>
}

export default Persons
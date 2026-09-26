import { useState } from "react"

const PersonForm = ({persons, setPersons})=>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleSubmit = (event =>{
    event.preventDefault()
    if (newName === "" || newNumber === "") {
      return window.alert(`Fill in all of the info before adding a new person`)
    }
    if (persons.find(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1)
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  })

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
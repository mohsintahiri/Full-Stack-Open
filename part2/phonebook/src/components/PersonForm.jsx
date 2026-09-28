import { useState } from "react"
import personService from "../services/persons"

const PersonForm = ({persons, setPersons, setNotificationMessage, setNotificationType})=>{
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!newName.trim() || !newNumber.trim()) {
      setNotificationMessage(`Fill in all of the information before adding a new person!`)
      setNotificationType('informationType')
      setTimeout(() => {
        setNotificationMessage(null)
        setNotificationType('null')
      }, 5000)
    }

    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      const shouldUpdate = confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
      if (!shouldUpdate) return

      personService
        .updatePerson(existingPerson.id, { ...existingPerson, number: newNumber })
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`${returnedPerson.name}'s number has been updated.`)
          setNotificationType('successType')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType('null')
          }, 5000)
        })
        .catch(error => {
          setPersons(persons.filter(p => p.id !== existingPerson.id))
          setNotificationMessage(`${existingPerson.name} was already deleted from the server`)
          setNotificationType('errorType')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType('null')
          }, 5000)
        })
      return
    }

    personService
      .createPerson({ name: newName, number: newNumber })
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`${returnedPerson.name} has been created.`)
          setNotificationType('successType')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType('null')
          }, 5000)
      })
  }

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
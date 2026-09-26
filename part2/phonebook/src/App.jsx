import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
  const handleFilterChange = event => setNewFilter(event.target.value)
  const personsToShow = persons.filter(person => newFilter===""? person : person.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with <input value={newFilter} onChange={handleFilterChange}/></div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
       {personsToShow.map(i => <li key={i.id}>{i.name} {i.number}</li>)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
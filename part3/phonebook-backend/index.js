require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const app = express()
const Person = require('./models/person')

let persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.use(express.static('dist'))
app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/info', (request, response)=>{
  response.send(
    `<p>Phonebook has info for ${persons.length} persons</p>
    <p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response)=>{
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response)=>{
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response)=>{
  Person.findByIdAndDelete(request.params.id).then(person => response.status(204).end())
})

app.post('/api/persons', (request, response)=>{
  const body = request.body

  if(!body.name || !body.number){
    return response.status(400).json({
      error: "name or number missing"
    })
  }

  if(persons.find(p => p.name === body.name)){
    return response.status(400).json({
      error: "name already in the phonebook"
    })
  }

  const person = new Person({ 
    "name": body.name, 
    "number": body.number
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
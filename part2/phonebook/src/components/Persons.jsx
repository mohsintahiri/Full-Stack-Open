const Persons = ({personsToShow})=>{
  return  <ul>
            {personsToShow.map(i => <li key={i.id}>{i.name} {i.number}</li>)}
          </ul>
}

export default Persons
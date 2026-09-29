import { useEffect, useState } from "react"
import countryService from "./services/countries"
const App = ()=>{
  const [allCountries, setAllCountries] = useState('')

  useEffect(()=>{
    countryService
      .getAllCountries()
      .then((allCountries)=> setAllCountries(allCountries.map(c => c.name.common)))
  },[])

  const handleFilter = (event) =>{
    console.log(event)
    const filteredCountries = allCountries.filter(c => c.toUpperCase().includes(event.target.value.toUpperCase()))
    console.log(filteredCountries)
  }

  return(
    <div>
      <div>find countries <input onChange={handleFilter}/> </div>
    </div>
  )
}

export default App
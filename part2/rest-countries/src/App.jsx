import { useEffect, useState } from "react"
import countryService from "./services/countries"
import Weather from "./component/Weather"
import Country from "./component/Country"

const App = ()=>{
  const [allCountries, setAllCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    countryService
      .getAllCountries()
      .then((allCountries)=> setAllCountries(allCountries))
  },[])

  const countriesContainer = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }

  const countryItem = {
    display: "flex",
    gap: "5px"
  }

  const matches = search.trim() ===""
    ? []
    : allCountries.filter(c =>
        c.name.common.toUpperCase().includes(search.toUpperCase())
      )

  const currentWeather = matches.length === 1
    ?countryService.getWeather(matches[0].capital).then((weather) => weather)
    :undefined

  return(
    <div>
      <div>
        <label>find countries </label>
        <input value={search} onChange={e => setSearch(e.target.value)}/>
      </div>

      {matches.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}

      {matches.length > 1 && matches.length <= 10 && (
          <ul style={countriesContainer}>
            {matches.map(c => 
            <li key={c.name.common} style={countryItem}>
              <span>{c.name.common}</span>
              <button onClick={()=>setSearch(c.name.common)}>Show</button>
            </li>)}
          </ul>
      )}

      {matches.length === 1 && (
        <Country country={matches[0]}/>
      )}
      {search.trim() !== "" && matches.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  )
}

export default App
import { useEffect, useState } from "react"
import countryService from "./services/countries"
import Weather from "./component/Weather"

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
        <div>
          <h1>{matches[0].name.common}</h1>
          <p>Capital {matches[0].capital}</p>
          <p>Area {matches[0].area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(matches[0].languages || {}).map((value, index)=>(
              <li key={index}>{value}</li>
            ))}
          </ul>
          <img src={matches[0].flags.svg} alt={matches[0].flags.alt} height={200}/>
          <Weather capital={matches[0].capital}/>
        </div>
      )}

      {search.trim() !== "" && matches.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  )
}

export default App
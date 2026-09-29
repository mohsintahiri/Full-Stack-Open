import Weather from "./Weather";

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages || {}).map((value, index)=>(
          <li key={index}>{value}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} height={200}/>
      <Weather capital={country.capital}/>
    </div>
  )
}

export default Country
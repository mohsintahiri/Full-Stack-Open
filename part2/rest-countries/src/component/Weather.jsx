import { useEffect, useState } from "react"
import countryService from "../services/countries"

const Weather = ({capital}) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    countryService
      .getWeather(capital)
      .then(data => setWeather(data))
  }, [capital])

  if(!weather){
    return <p>Loading weather ...</p>
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
      {console.log(weather)}
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt={weather.weather[0].description} 
      />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
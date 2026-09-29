import axios from 'axios'

const RESTUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const APIKey = "70a93a6f7437f759a5e997cddd10dd39"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"


const getAllCountries = () => {
  const request = axios.get(`${RESTUrl}/all`)
  return request.then(response => response.data)
}

const getWeather = (city) => {
  const request = axios.get(`${weatherUrl}q=${city}&appid=${APIKey}`)
  return request.then(response => response.data)
}

export default {getAllCountries, getWeather}
import axios from 'axios'

const RESTUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = () => {
  const request = axios.get(`${RESTUrl}/all`)
  return request.then(response => response.data)
}

export default {getAllCountries}
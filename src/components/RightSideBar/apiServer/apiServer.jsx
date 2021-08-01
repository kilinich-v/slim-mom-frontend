import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDFhMzFmODkyNjQ5NDc2OTVjNmEzNiIsImlhdCI6MTYyNzgzMjAzOSwiZXhwIjoxNjI3ODYwODM5fQ.1S7U7HXL1CJyejSbQg8Gcw-sjVuU-hjtE5WECS9lUy0'

  const fetchDayInfo = (dayData) => {
      const test = axios.get(`/products/${dayData}`)
      .then(response => response.data)
    return test
    // eslint-disable-next-line no-unreachable
}




export {fetchDayInfo} 

import axios from 'axios'

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDA3YTI0M2VkNDFkMjg4YzljYmZkOCIsImlhdCI6MTYyNzc2MDUxMywiZXhwIjoxNjI4MTIwNTEzfQ.87mQneSeQxrZE2To2KSQK_hwLc_0lYaQ2E-PSlYTsc4`
// axios.defaults.baseURL = 'http://localhost:3001'
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const getProducts = query => {
  return axios
    .get(`/products/search?product=${query}`)
    .then(({ data }) => {
      return data
    })
    .catch(error => error)
}

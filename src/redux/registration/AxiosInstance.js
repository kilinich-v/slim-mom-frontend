import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'https://connections-api.herokuapp.com',
  baseURL: 'http://localhost:3001/api',
})
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
export default axiosInstance

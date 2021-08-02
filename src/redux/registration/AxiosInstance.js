import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://slim-mom-backend.herokuapp.com',
  // baseURL: 'http://localhost:3001',
})
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
export default axiosInstance

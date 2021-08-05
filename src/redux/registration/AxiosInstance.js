import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://slim-mom-backend.herokuapp.com',
})
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
export default axiosInstance

import axiosInstance from './AxiosInstance'
// import axios from 'axios'

import {
  onSignUpRequest,
  onSignUpSuccess,
  onSignUpFailure,
  onLoginSuccess,
  onLoginRequest,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
  onGetUser,
} from './UserSlice'

export const getUser = () => async (dispatch, getState) => {
  dispatch(onSignUpRequest())

  try {
    const response = await axiosInstance.get('/users/current')

    dispatch(onGetUser(response.data))
  } catch (error) {
    dispatch(onLoginFailure(error.message))
  }
}

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest())
  axiosInstance
    .post('/users/login', payload)
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
      return dispatch(onLoginSuccess(data))
    })
    .catch(error => {
      dispatch(onLoginFailure(error.message))
    })
}

export const signUp = payload => (dispatch, getState) => {
  const { name, email, password } = payload
  dispatch(onSignUpRequest())
  axiosInstance
    .post('/users/signup', { name, email, password })
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
      const newData = dispatch(onSignUpSuccess(data))
      if (newData) {
        dispatch(login({ email, password }))
      }
    })
    .catch(error => {
      dispatch(onSignUpFailure(error.message))
    })
}

export const logout = payload => (dispatch, getState) => {
  dispatch(onLogoutRequest())

  axiosInstance
    .post('/users/logout', payload)
    .then(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('calcFormParams')
      dispatch(onLogoutSuccess())
    })
    .catch(error => dispatch(onLogoutFailure(error.message)))
}

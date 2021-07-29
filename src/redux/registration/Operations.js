import axiosInstance from './AxiosInstance'

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
} from './UserSlice'

export const signUp = payload => (dispatch, getState) => {
  console.log("log from signUp, this is 'payload':", payload)
  dispatch(onSignUpRequest())
  axiosInstance
    .post('/users/signup', payload)
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
      dispatch(onSignUpSuccess(data))
    })
    .catch(error => {
      dispatch(onSignUpFailure(error.message))
    })
}

export const login = payload => (dispatch, getState) => {
  dispatch(onLoginRequest())
  axiosInstance
    .post('/users/login', payload)
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
      dispatch(onLoginSuccess(data))
    })
    .catch(error => {
      dispatch(onLoginFailure(error.message))
    })
}

export const logout = payload => (dispatch, getState) => {
  dispatch(onLogoutRequest())
  axiosInstance
    .post('/users/logout', payload)
    .then(() => {
      localStorage.removeItem('token')
      dispatch(onLogoutSuccess())
    })
    .catch(error => dispatch(onLogoutFailure(error.message)))
}

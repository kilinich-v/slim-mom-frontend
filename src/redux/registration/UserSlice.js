import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedOn: false,
  isLoading: false,
  error: '',
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onSignUpRequest: state => {
      state.isLoading = true
    },

    onSignUpSuccess: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.token = payload.token
      state.isLoggedOn = !!payload.token
    },
    onSignUpFailure: (state, { payload }) => {
      state.error = payload.message
      state.isLoggedOn = false
      state.isLoading = false
    },

    onLoginRequest: state => {
      state.isLoading = true
    },

    onLoginSuccess: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.token = payload.token
      state.isLoggedOn = true
      state.isLoading = false
    },

    onLoginFailure: (state, { payload }) => {
      state.error = payload.message
      state.isLoggedOn = false
      state.isLoading = false
    },

    onLogoutRequest: state => {
      state.isLoading = true
    },

    onLogoutSuccess: (state, { payload }) => {
      state.name = ''
      state.email = ''
      state.token = ''
      state.isLoading = false
      state.isLoggedOn = false
    },

    onLogoutFailure: (state, { payload }) => {
      state.error = payload.message
      state.isLoading = false
    },

    onGetUser: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.isLoggedOn = true
      state.isLoading = false
    },
  },
})

export const {
  onSignUpRequest,
  onSignUpSuccess,
  onSignUpFailure,
  onLogout,
  onGetUser,
  onLoginRequest,
  onLoginSuccess,
  onLoginFailure,
  onLogoutRequest,
  onLogoutSuccess,
  onLogoutFailure,
} = actions

export default reducer

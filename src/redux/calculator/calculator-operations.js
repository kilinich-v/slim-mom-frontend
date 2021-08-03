import axios from 'axios'
import { calcRequest, calcSuccess, calcError } from './calculator-action'

export const calcData = calcFormParams => async dispatch => {
  try {
    dispatch(calcRequest())
    const { data } = await axios.post(
      'https://slim-mom-backend.herokuapp.com/users/public',
      calcFormParams,
    )
    localStorage.setItem('calcFormParams', JSON.stringify(calcFormParams))
    dispatch(calcSuccess(data))
  } catch (error) {
    dispatch(calcError(error.message))
  }
}

export const calcDataPrivate = (calcFormParams, token) => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://slim-mom-backend.herokuapp.com/users/private',
      calcFormParams,
      { headers: { Authorization: `Bearer ${token}` } },
    )
    dispatch(calcSuccess(data))
  } catch (error) {
    dispatch(calcError(error.message))
  }
}

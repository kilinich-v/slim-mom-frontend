import axios from 'axios'
import { calcRequest, calcSuccess, calcError } from './calculator-action'

export const calcData = calcFormParams => async dispatch => {
  dispatch(calcRequest())
  try {
    const { data } = await axios.post(
      'https://slim-mom-backend.herokuapp.com/users/public',
      calcFormParams,
    )
    dispatch(calcSuccess(data))
  } catch (error) {
    dispatch(calcError(error.message))
  }
}

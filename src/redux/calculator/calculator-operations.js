import axios from 'axios'
import { calcRequest, calcSuccess, calcError } from './calculator-action'

export const calcData =
  (height, age, weight, desiredWeight, groupBlood) => async dispatch => {
    dispatch(calcRequest())
    try {
      const { data } = await axios.post(
        'https://slim-mom-backend.herokuapp.com/users/public',
        {
          height,
          age,
          weight,
          desiredWeight,
          groupBlood,
        },
      )
      dispatch(calcSuccess(data))
    } catch (error) {
      dispatch(calcError(error.message))
    }
  }

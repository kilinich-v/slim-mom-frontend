import axios from 'axios'
import { calcRequest, calcSuccess, calcError } from './calculator-action'

export const calcData =
  (growth, age, weight, desiredWeight, groupBlood) => async dispatch => {
    dispatch(calcRequest())
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/users/public',
        {
          growth,
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

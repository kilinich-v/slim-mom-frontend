import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import styles from './CalcForm.module.scss'
import {
  calcData,
  calcDataPrivate,
} from '../../redux/calculator/calculator-operations'
import RadioButtons from '../RadioButtonsGroup/RadioButtonsGroup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainButton from '../common/MainButton'
import MainModal from '../MainModal'

const CssTextField = withStyles(theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: '30px',
      [theme.breakpoints.down('768')]: {
        marginBottom: '10px',
      },
    },
    [theme.breakpoints.down('768')]: {
      marginBottom: '10px',
    },
    width: 240,
    '& label': {
      fontSize: '17px',
      lineHeight: '1.21',
      letterSpacing: '0.04em',
      fontFamily: 'Verdana',
      color: '#9b9faa',
    },
    '& label.Mui-focused': {
      color: orange[500],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: orange[500],
    },
  },
}))(TextField)

export default function CalcForm() {
  const [value, setValue] = useState(false)
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [desiredWeight, setDesiredWeight] = useState('')
  const [groupBlood, setGroupBlood] = useState('1')
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setValue(true)
  }, [])

  const handleChange = e => {
    const { name, value, defaultValue } = e.target
    switch (name) {
      case 'height':
        setHeight(value)
        break
      case 'age':
        setAge(value)
        break
      case 'weight':
        setWeight(value)
        break
      case 'desiredWeight':
        setDesiredWeight(value)
        break
      case 'groupBlood':
        setGroupBlood(defaultValue)
        break

      default:
        break
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!height && !age && !weight && !desiredWeight) {
      toast.error('Заполните поля')
    } else if (+height < 130 || +height > 220) {
      toast.error('Неверно заполненое поле Рост')
    } else if (+age < 18 || +age > 99) {
      toast.error('Неверно заполненое поле Возраст')
    } else if (+weight < 50 || +weight > 200) {
      toast.error('Неверно заполненое поле Вес')
    } else if (+desiredWeight < 45 || +desiredWeight > 100) {
      toast.error('Неверно заполненое поле Желаемый вес')
    } else {
      const calcFormParams = {
        height,
        age,
        weight,
        desiredWeight,
        groupBlood,
      }
      const token = localStorage.getItem('token')
      if (token) {
        dispatch(calcDataPrivate(calcFormParams, token))
      } else {
        dispatch(calcData(calcFormParams))
        setOpen(true)
      }
      reset()
    }
  }
  const reset = () => {
    setHeight('')
    setAge('')
    setWeight('')
    setDesiredWeight('')
    setGroupBlood('')
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <h1
          className={styles.title}
          style={{
            transform: value ? 'translateY(0)' : 'translateY(-101%)',
            opacity: value ? '1' : '0',
          }}
        >
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
        <div
          className={styles.formContainer}
          style={{
            transform: value ? 'translateX(0)' : 'translateX(-101%)',
            opacity: value ? '1' : '0',
          }}
        >
          <div>
            <CssTextField
              id="standard-basic"
              label="Рост"
              name="height"
              required
              placeholder="введите число от 130 до 220"
              value={height}
              type="number"
              onChange={handleChange}
            />
            <CssTextField
              id="standard-basic"
              label="Возраст"
              required
              name="age"
              placeholder="введите число от 18 до 99"
              value={age}
              type="number"
              onChange={handleChange}
            />
            <CssTextField
              id="standard-basic"
              label="Текущий вес"
              required
              name="weight"
              placeholder="введите число от 50 до 200"
              value={weight}
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <CssTextField
              id="standard-basic"
              style={{ marginBottom: 40 }}
              label="Желаемый вес"
              required
              name="desiredWeight"
              placeholder="введите число от 45 до 100"
              value={desiredWeight}
              type="number"
              onChange={handleChange}
            />
            <RadioButtons onChange={handleChange} />
          </div>
        </div>
        <MainButton id={styles.btn} type="submit">
          Похудеть
        </MainButton>
      </form>
      <MainModal open={open} onClose={handleClose} />
    </>
  )
}

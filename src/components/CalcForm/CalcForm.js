import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import styles from './CalcForm.module.scss'
import { calcData } from '../../redux/calculator/calculator-operations'
import RadioButtons from '../RadioButtonsGroup/RadioButtonsGroup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainButton from '../common/MainButton'
import MainModal from '../Modal'

const CssTextField = withStyles(theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: '30px',
    },
    [theme.breakpoints.down('768')]: {
      marginBottom: '30px',
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
      toast.success(
        'Мы подобрали для Вас ряд нежелаемых к употреблению продуктов',
      )
      const calcFormParams = {
        height,
        age,
        weight,
        desiredWeight,
        groupBlood,
      }
      dispatch(calcData(calcFormParams))

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

  return (
    <>
      <h1
        className={styles.title}
        style={{
          transform: value ? 'translateY(0)' : 'translateY(-101%)',
          opacity: value ? '1' : '0',
        }}
      >
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
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
              onChange={handleChange}
            />
            <CssTextField
              id="standard-basic"
              label="Возраст"
              required
              name="age"
              placeholder="введите число от 18 до 99"
              value={age}
              onChange={handleChange}
            />
            <CssTextField
              id="standard-basic"
              label="Текущий вес"
              required
              name="weight"
              placeholder="введите число от 50 до 200"
              value={weight}
              onChange={handleChange}
            />
          </div>
          <div>
            <CssTextField
              id="standard-basic"
              style={{ marginBottom: 50 }}
              label="Желаемый вес"
              required
              name="desiredWeight"
              placeholder="введите число от 45 до 100"
              value={desiredWeight}
              onChange={handleChange}
            />
            <RadioButtons onChange={handleChange} />
          </div>
        </div>
        <MainModal />
        {/* <MainButton id={styles.btn} type="submit">
          Похудеть
        </MainButton> */}
      </form>
    </>
  )
}

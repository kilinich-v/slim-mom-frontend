import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './CalcForm.module.scss'
import { calcData } from '../../redux/calculator/calculator-operations'
import RadioButtons from '../RadioButtonsGroup/RadioButtonsGroup'

const ColorButton = withStyles(theme => ({
  root: {
    width: '176px',
    height: '44px',
    borderRadius: '30px',
    fontFamily: 'verdana',
    fontSize: '14px',
    lineHeight: '1.21',
    letterSpacing: '0.04em',
    color: 'white',
    boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',

    marginTop: '115px',
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
    [theme.breakpoints.down('768')]: {
      bottom: '0',
    },
    [theme.breakpoints.down('1200')]: {
      left: '0',
    },
  },
}))(Button)

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
  const [growth, setGrowth] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [desiredWeight, setDesiredWeight] = useState('')
  const [groupBlood, setGroupBlood] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setValue(true)
  }, [])

  const handleChange = e => {
    const { name, value, defaultValue } = e.target
    switch (name) {
      case 'growth':
        setGrowth(value)
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
    dispatch(calcData({ growth, age, weight, desiredWeight, groupBlood }))
    reset()
  }
  const reset = () => {
    setGrowth('')
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
        style={{
          transform: value ? 'translateX(0)' : 'translateX(-101%)',
          opacity: value ? '1' : '0',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <CssTextField
            id="standard-basic"
            label="Рост"
            name="growth"
            value={growth}
            onChange={handleChange}
          />
          <CssTextField
            id="standard-basic"
            label="Возраст"
            name="age"
            value={age}
            onChange={handleChange}
          />
          <CssTextField
            id="standard-basic"
            label="Текущий вес"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <CssTextField
            id="standard-basic"
            style={{ marginBottom: 50 }}
            label="Желаемый вес"
            name="desiredWeight"
            value={desiredWeight}
            onChange={handleChange}
          />
          <RadioButtons onChange={handleChange} />
          <ColorButton type="submit">Похудеть</ColorButton>
        </div>
      </form>
    </>
  )
}

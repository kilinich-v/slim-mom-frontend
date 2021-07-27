import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import styles from '../CalcForm.module.scss'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '510px',
    marginBottom: '30px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('768')]: {
      width: '240px',
      height: '354px',
      alignContent: 'flex-start',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '13px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginLeft: '134px',
    color: orange[600],
  },
}))
const ColorButtonEnter = withStyles(theme => ({
  root: {
    borderRadius: '30px',
    width: '176px',
    height: '44px',
    color: 'white',
    marginBottom: '20px',

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

const ColorButtonRegister = withStyles(theme => ({
  root: {
    borderRadius: '30px',
    width: '176px',
    height: '44px',
    color: '#FC842D',
    marginBottom: '20px',

    border: '2px solid #FC842D',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: orange[700],
      color: 'white',
    },
    [theme.breakpoints.down('768')]: {
      bottom: '0',
    },
    [theme.breakpoints.down('1200')]: {
      left: '0',
    },
  },
}))(Button)

const CssTextField = withStyles({
  root: {
    marginBottom: '20px',
    '& label': {
      fontSize: '14px',
    },
    '& label.Mui-focused': {
      color: orange[500],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: orange[500],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: orange[500],
      },
      '&:hover fieldset': {
        borderColor: orange[500],
      },
      '&.Mui-focused fieldset': {
        borderColor: orange[500],
      },
    },
  },
})(TextField)

export default function RegistrationForm() {
  const classes = useStyles()
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(true)
  }, [])

  const handleChangeLogin = ({ target }) => setLogin(target.value)
  const handleChangePassword = ({ target }) => setPassword(target.value)
  const handleChangeName = ({ target }) => setName(target.value)

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch(signUp({ name, login, password }))
    setName('')
    setLogin('')
    setPassword('')
  }

  return (
    <div
      className={styles.container}
      style={{
        transform: value ? 'translateX(0)' : 'translateX(-101%)',
        opacity: value ? '1' : '0',
      }}
    >
      <h3 className={classes.title}>регистрация</h3>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <CssTextField
          required
          id="standard-name-input"
          label="Имя"
          type="Name"
          autoComplete="current-name"
          style={{ width: 240 }}
          onChange={handleChangeName}
        />
        <CssTextField
          required
          id="standard-password-input"
          label="Логин"
          type="login"
          autoComplete="current-login"
          style={{ width: 240 }}
          onChange={handleChangeLogin}
        />

        <CssTextField
          required
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          style={{ width: 240 }}
          onChange={handleChangePassword}
        />

        <ColorButtonEnter type="submit">Вход</ColorButtonEnter>
        <ColorButtonRegister type="submit">Регистрация</ColorButtonRegister>
      </form>
    </div>
  )
}

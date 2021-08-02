import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import { login } from '../../redux/registration/Operations'
import { getIsLoggedOn, getToken } from '../../redux/registration/Selectors'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '290px',
    marginBottom: '30px',
    justifyContent: 'space-between',
    [theme.breakpoints.up('768')]: {
      width: '382px',
      alignItems: 'start',
      marginLeft: '71',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '13px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    textAlign: 'center',
    // marginLeft: '134px',
    marginTop: '40px',
    color: orange[600],
    [theme.breakpoints.up('768')]: {
      marginTop: '157px',
      textAlign: 'left',
    },
    [theme.breakpoints.up('1200')]: {
      marginTop: '95px',
    },
  },
  button: {
    textAlign: 'center',
    [theme.breakpoints.up('768')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '382px',
    },
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

const CssTextField = withStyles(theme => ({
  root: {
    marginBottom: '20px',
    '& label': {
      fontSize: '14px',
    },
    '& .MuiInput-underline': {
      width: '290px',
      [theme.breakpoints.up('768')]: {
        width: '239px',
      },
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
}))(TextField)

export default function AuthForm() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(true)
  }, [])

  const handleChangeEmail = ({ target }) => setEmail(target.value)
  const handleChangePassword = ({ target }) => setPassword(target.value)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }

  const isLoggedOn = useSelector(getIsLoggedOn)
  const isAuthorized = useSelector(getToken)
  console.log(isLoggedOn)

  return (
    <div
      style={{
        transform: value ? 'translateX(0)' : 'translateX(-101%)',
        opacity: value ? '1' : '0',
      }}
    >
      {isAuthorized ? (
        <Redirect to="/diary" />
      ) : (
        <div>
          <h3 className={classes.title}>вход</h3>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <CssTextField
              required
              id="standard-email-input"
              label="Логин "
              type="email"
              value={email}
              autoComplete="current-login"
              onChange={handleChangeEmail}
            />

            <CssTextField
              required
              id="standard-password-input"
              label="Пароль "
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={handleChangePassword}
            />
            <div className={classes.button}>
              <ColorButtonEnter type="submit">Вход</ColorButtonEnter>
              <ColorButtonRegister type="submit">
                Регистрация
              </ColorButtonRegister>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

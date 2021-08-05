import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

import { signUp } from '../../redux/registration/Operations'
import routes from '../../routes'
import MainButton from '../common/MainButton'
import stylesCss from './styles.module.scss'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('767')]: {
      width: 289,
      margin: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '290px',
    marginBottom: '30px',
    justifyContent: 'space-between',
    [theme.breakpoints.up('768')]: {
      width: '382px',
      alignItems: 'start',
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

export default function RegistrationForm() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(true)
  }, [])

  const handleChangeEmail = ({ target }) => setEmail(target.value)
  const handleChangePassword = ({ target }) => setPassword(target.value)
  const handleChangeName = ({ target }) => setName(target.value)

  const reset = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(signUp({ name, email, password }))
    reset()
  }

  return (
    <div
      style={{
        transform: value ? 'translateX(0)' : 'translateX(-101%)',
        opacity: value ? '1' : '0',
      }}
    >
      <div>
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
            value={name}
            type="Name"
            autoComplete="current-name"
            // style={{ width: 240 }}
            onChange={handleChangeName}
          />
          <CssTextField
            required
            id="standard-email-input"
            label="Email"
            value={email}
            type="email"
            autoComplete="current-login"
            // style={{ width: 240 }}
            onChange={handleChangeEmail}
          />

          <CssTextField
            required
            id="standard-password-input"
            label="Пароль"
            value={password}
            type="password"
            autoComplete="current-password"
            // style={{ width: 240 }}
            onChange={handleChangePassword}
          />
          <div className={classes.button}>
            <NavLink to={routes.auth} style={{ textDecoration: 'none' }}>
              <MainButton id={stylesCss.linkBtn} type="button">
                Вход
              </MainButton>
            </NavLink>
            <MainButton type="submit">Регистрация</MainButton>
          </div>
        </form>
      </div>
    </div>
  )
}

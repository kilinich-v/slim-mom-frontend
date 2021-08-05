import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import { login } from '../../redux/registration/Operations'
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

  return (
    <div
      style={{
        transform: value ? 'translateX(0)' : 'translateX(-101%)',
        opacity: value ? '1' : '0',
      }}
    >
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
            label="Email "
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
            <MainButton type="submit" id={stylesCss.loginBtn}>
              Вход
            </MainButton>
            <NavLink to={routes.reg} style={{ textDecoration: 'none' }}>
              <MainButton id={stylesCss.regBtn} type="button">
                Регистрация{' '}
              </MainButton>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

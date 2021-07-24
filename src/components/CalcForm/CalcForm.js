import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import styles from './CalcForm.module.scss'
import Button from '@material-ui/core/Button'

const OrangeRadio = withStyles({
  root: {
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '510px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('768')]: {
      width: '240px',
      flexWrap: 'wrap',
      height: '354px',
      alignContent: 'flex-start',
    },
  },
}))
const ColorButton = withStyles(theme => ({
  root: {
    borderRadius: '30px',
    width: '176px',
    height: '44px',
    color: 'white',
    position: 'absolute',
    bottom: '0',
    right: '83px',
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
const CssTextField = withStyles({
  root: {
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

export default function CalcForm() {
  const classes = useStyles()
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(true)
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        transform: value ? 'translateX(0)' : 'translateX(-101%)',
        opacity: value ? '1' : '0',
      }}
    >
      <h1 style={{ margin: '0' }}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <CssTextField
            id="standard-basic"
            label="Рост"
            style={{ width: 240 }}
          />
          <CssTextField
            id="standard-basic"
            label="Возраст"
            style={{ width: 240 }}
          />
          <CssTextField
            id="standard-basic"
            label="Текущий вес"
            style={{ width: 240 }}
          />
        </div>
        <div>
          <CssTextField
            id="standard-basic"
            label="Желаемый вес"
            style={{ width: 240 }}
          />
          <FormLabel component="legend" style={{ width: 240, marginTop: 40 }}>
            Группа крови
          </FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="1"
              control={<OrangeRadio color="blue" />}
              label="1"
              labelPlacement="End"
            />
            <FormControlLabel
              value="2"
              control={<OrangeRadio color="secondary" />}
              label="2"
              labelPlacement="End"
            />
            <FormControlLabel
              value="3"
              control={<OrangeRadio color="secondary" />}
              label="3"
              labelPlacement="End"
            />
            <FormControlLabel
              value="4"
              control={<OrangeRadio color="secondary" />}
              label="4"
            />
          </RadioGroup>
        </div>
        <ColorButton type="submit">Похудеть</ColorButton>
      </form>
    </div>
  )
}

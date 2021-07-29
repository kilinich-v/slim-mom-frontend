import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { dateEatenProduct } from '../../../redux/product/product-operations'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 259,
  },
  '& .MuiInputBase-input': {
    fontSize: '34px',
    padding: '16px, 0px,  7px',
  },
}))

export default function DiaryDateСalendar() {
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-CA'))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dateEatenProduct(date))
  }, [date, dispatch])

  const handleDateChange = event => {
    const { value } = event.target
    setDate(value)
  }
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue={date}
        onChange={event => handleDateChange(event)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}

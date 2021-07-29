import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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

  useEffect(() => {
    setDate(date)
  }, [date])

  const handleDateChange = date => {
    setDate(date)
  }
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue={date}
        onChange={() => handleDateChange(date)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}

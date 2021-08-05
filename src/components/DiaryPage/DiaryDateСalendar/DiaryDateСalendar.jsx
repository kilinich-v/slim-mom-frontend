import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { dateEatenProduct } from '../../../redux/product/product-operations'
import { productLoading } from '../../../redux/product/product-selectors'
import Loader from '../../common/Loader'
const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: '188px',
    [theme.breakpoints.up('768')]: {
      width: '259px',
    },
    '& input': {
      fontSize: '18px',
      fontWeight: '700',
      fontFamily: 'Verdana',
      [theme.breakpoints.up('768')]: {
        fontSize: '26px',
      },
    },
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
}))

export default function DiaryDateСalendar() {
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-CA'))
  const isLoading = useSelector(productLoading)
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form className={classes.container} noValidate>
          <TextField
            InputProps={{ classes }}
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
      )}
    </>
  )
}

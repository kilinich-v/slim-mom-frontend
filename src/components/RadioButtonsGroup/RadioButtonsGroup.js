import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
const OrangeRadio = withStyles({
  root: {
    color: '#9b9faa',
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})(props => <Radio {...props} />)
const useStyles = makeStyles(theme => ({
  formControl: {
    color: '#9b9faa',
  },
}))
export default function RadioButtons({ onChange }) {
  const classes = useStyles()
  return (
    <RadioGroup
      row
      aria-label="groupBlood"
      name="groupBlood"
      defaultValue="1"
      onChange={onChange}
      style={{ justifyContent: 'space-between' }}
    >
      <FormLabel
        required
        component="legend"
        style={{
          width: 240,
          fontSize: '17px',
          fontFamily: 'Verdana',
          color: '#9b9faa',
        }}
      >
        Группа крови
      </FormLabel>
      <FormControlLabel
        className={classes.formControl}
        value="1"
        control={<OrangeRadio />}
        label="1"
      />
      <FormControlLabel
        className={classes.formControl}
        value="2"
        control={<OrangeRadio />}
        label="2"
      />
      <FormControlLabel
        className={classes.formControl}
        value="3"
        control={<OrangeRadio />}
        label="3"
      />
      <FormControlLabel
        className={classes.formControl}
        value="4"
        control={<OrangeRadio />}
        label="4"
      />
    </RadioGroup>
  )
}

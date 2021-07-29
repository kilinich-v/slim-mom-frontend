import Button from '@material-ui/core/Button'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

const MainButton = withStyles({
    root: {
      borderRadius: '30px',
      width: '176px',
      height: '44px',
      color: 'white',
      backgroundColor: '#FC842D',
      boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
      fontFamily: 'Verdana',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.04em',
      fontWeight: '700',
      textAlign: 'center',
      textTransform: 'capitalize',

      '&:hover': {
        backgroundColor: orange[900],
      },

  }})(Button);

export default MainButton
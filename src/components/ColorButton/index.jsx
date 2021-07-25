import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles'

const ColorButton = withStyles(theme => ({
    root: {
      borderRadius: '30px',
      width: '176px',
      height: '44px',
      color: 'white',
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
  }))(Button);

  export default ColorButton;
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles'

const MainButton = withStyles(theme => ({
    root: {
      borderRadius: '30px',
      width: '176px',
      height: '44px',
      color: 'white',
      backgroundColor: '#FC842D',
      boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
      '&:hover': {
        backgroundColor: orange[900],
      },
      [theme.breakpoints.down('768')]: {
        bottom: '0',
      },
      [theme.breakpoints.down('1200')]: {
        left: '0',
      },
    },
  }))(Button);

  export default MainButton;
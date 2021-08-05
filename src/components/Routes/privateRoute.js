import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedOn } from '../../redux/registration/Selectors'
import routes from '../../routes'

const PrivateRoute = props => {
  const isLogin = useSelector(getIsLoggedOn)

  return isLogin || localStorage.getItem('token') ? (
    <Route {...props} />
  ) : (
    <Redirect to={routes.main} />
  )
}

export default PrivateRoute

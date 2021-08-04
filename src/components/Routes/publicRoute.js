import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedOn } from '../../redux/registration/Selectors'

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLogin = useSelector(getIsLoggedOn)
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogin && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute

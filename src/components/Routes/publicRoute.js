import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedOn } from '../../redux/registration/Selectors'

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedOn = useSelector(getIsLoggedOn)
  const shouldRedirect = isLoggedOn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/diary" /> : children}
    </Route>
  )
}

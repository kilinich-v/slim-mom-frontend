import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedOn } from '../../redux/registration/Selectors'

export default function PrivatRoute({ children, ...routeProps }) {
  const isLoggedOn = useSelector(getIsLoggedOn)
  return (
    <Route {...routeProps}>
      {isLoggedOn ? children : <Redirect to="/auth" />}
    </Route>
  )
}

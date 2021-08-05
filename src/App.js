import { lazy } from 'react'
import { Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routes from './routes'
import { getUser } from './redux/registration/Operations'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PublicRoute from './components/Routes/publicRoute'
import PrivateRoute from './components/Routes/privateRoute'
import Loader from './components/common/Loader'
import { getIsLoggedOn } from './redux/registration/Selectors'

const AuthView = lazy(
  () => import('./views/AuthView') /* webpackChunkName: "AuthView" */,
)
const CalculatorView = lazy(
  () =>
    import('./views/CalculatorView') /* webpackChunkName: "CalculatorView" */,
)
const DiaryView = lazy(
  () => import('./views/DiaryView') /* webpackChunkName: "DiaryView" */,
)
const MainPageView = lazy(
  () => import('./views/MainPageView') /* webpackChunkName: "MainPageView" */,
)
const RegistrationView = lazy(
  () =>
    import(
      './views/RegistrationView'
    ) /* webpackChunkName: "RegiastrationView" */,
)

function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector(getIsLoggedOn)

  useEffect(() => {
    if (isLogin || localStorage.getItem('token')) dispatch(getUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            path={routes.main}
            exact
            restricted
            component={MainPageView}
            redirectTo={routes.calculator}
          />
          <PublicRoute
            path={routes.auth}
            restricted
            component={AuthView}
            redirectTo={routes.diary}
          />
          <PublicRoute
            path={routes.reg}
            restricted
            component={RegistrationView}
            redirectTo={routes.diary}
          />
          <PrivateRoute path={routes.calculator} component={CalculatorView} />
          <PrivateRoute path={routes.diary} component={DiaryView} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App

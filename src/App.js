import { Switch, Redirect } from 'react-router-dom'
import routes from './routes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getUser } from './redux/registration/Operations'
import MainPageView from './views/MainPageView'
import AuthView from './views/AuthView'
import RegistrationView from './views/RegistrationView'
import CalculatorView from './views/CalculatorView'
import DiaryView from './views/DiaryView'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PublicRoute from './components/Routes/publicRoute'
import PrivatRoute from './components/Routes/privatRoute'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Switch>
        {/* My routes*/}
        <PublicRoute exact path={routes.main}>
          <MainPageView />
        </PublicRoute>
        <PublicRoute path={routes.auth} restricted>
          <AuthView />
        </PublicRoute>
        <PublicRoute path={routes.reg} restricted>
          <RegistrationView />
        </PublicRoute>
        <PrivatRoute path={routes.calculator}>
          <CalculatorView />
        </PrivatRoute>
        <PrivatRoute path={routes.diary}>
          <DiaryView />
        </PrivatRoute>
        <PrivatRoute>
          <Redirect to={routes.diary} />
        </PrivatRoute>

        {/* The first routes */}
        {/* <Route exact path={routes.main} component={MainPageView} />
      
//         <Route exact path={routes.main} component={MainPageView} />
//         <Route path={routes.auth} component={AuthView} />
//         <Route path={routes.reg} component={RegistrationView} />
//         <Route path={routes.calculator} component={CalculatorView} />
//         <Route path={routes.diary} component={DiaryView} /> */}
      </Switch>
    </>
  )
}

export default App

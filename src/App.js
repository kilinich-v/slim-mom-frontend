import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import MainPageView from './views/MainPageView'
import AuthView from './views/AuthView'
import RegistrationView from './views/RegistrationView'
import CalculatorView from './views/CalculatorView'
import DiaryView from './views/DiaryView'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route exact path={routes.main} component={MainPageView} />
        <Route path={routes.auth} component={AuthView} />
        <Route path={routes.reg} component={RegistrationView} />
        <Route path={routes.calculator} component={CalculatorView} />
        <Route path={routes.diary} component={DiaryView} />
      </Switch>
    </>
  )
}

export default App

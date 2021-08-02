import { Route, Switch } from 'react-router-dom'

import routes from './routes'
import MainPageView from './views/MainPageView'
import AuthView from './views/AuthView'
import RegistrationView from './views/RegistrationView'
import CalculatorView from './views/CalculatorView'
import DiaryView from './views/DiaryView'

import PublicRoute from './components/Routes/publicRoute'
import PrivatRoute from './components/Routes/privatRoute'

function App() {
  
  return (
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

      {/* The first routes */}
      {/* <Route exact path={routes.main} component={MainPageView} />
        <Route path={routes.auth} component={AuthView} />
        <Route path={routes.reg} component={RegistrationView} />
        <Route path={routes.calculator} component={CalculatorView} />
        <Route path={routes.diary} component={DiaryView} /> */}
    </Switch>
  )
}

export default App

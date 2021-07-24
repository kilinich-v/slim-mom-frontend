import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import MainPageView from './views/MainPageView'
import AuthView from './views/AuthView'
import CalculatorView from './views/CalculatorView'
import DiaryView from './views/DiaryView'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.main} component={MainPageView} />
        <Route path={routes.auth} component={AuthView} />
        <Route path={routes.calculator} component={CalculatorView} />
        <Route path={routes.diary} component={DiaryView} />
      </Switch>
    </>
  )
}

export default App

import { createUseStyles } from 'react-jss'
import Container from '../components/Container'
import CalcForm from '../components/CalcForm'
import ContainerSideBar from '../components/ContainerSideBar'
import RightSideBar from '../components/RightSideBar'
import Header from '../components/Header'
import UserInfo from '../components/Header/UserInfo'
import { useWindowWidth } from '@react-hook/window-size'
const useStyles = createUseStyles({
  box: {
    '@media (min-width: 1024px)': {
      display: 'flex',
      alignItems: 'baseline',
    },
  },
})

const CalculatorView = () => {
  const styless = useStyles()
  const onlyWidth = useWindowWidth()
  return (
    <div className={styless.box}>
      <Container>
        <Header />
        <CalcForm />
      </Container>
      <ContainerSideBar>
        {onlyWidth > 1280 ? <UserInfo /> : ''}

        <RightSideBar />
      </ContainerSideBar>
    </div>
  )
}

export default CalculatorView

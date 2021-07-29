import { createUseStyles } from 'react-jss'
import Container from '../components/Container'
import CalcForm from '../components/CalcForm'
import ContainerSideBar from '../components/ContainerSideBar'
import RightSideBar from '../components/RightSideBar'

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
  return (
    <div className={styless.box}>
      <Container>
        <CalcForm />
      </Container>
      <ContainerSideBar>
        <RightSideBar />
      </ContainerSideBar>
    </div>
  )
}

export default CalculatorView

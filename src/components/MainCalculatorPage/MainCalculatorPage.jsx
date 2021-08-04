import Container from '../Container'
import CalcForm from '../CalcForm'
import ContainerSideBar from '../ContainerSideBar'
import RightSideBar from '../RightSideBar'
import Header from '../Header'
import UserInfo from '../Header/UserInfo'
import { useWindowWidth } from '@react-hook/window-size'
import styless from './styless.module.scss'

const MainCalculatorPage = () => {
  const onlyWidth = useWindowWidth()
  return (
    <>
      {onlyWidth >= 1280 ? (
        <div className={styless.wrapper}>
          <div className={styless.section}>
          <div className={styless.header}>
            <Header />
            <div className={styless.headerBox}>
              {onlyWidth >= 1280 ? <UserInfo /> : ''}
            </div>
          </div>
          <div className={styless.box}>
              <CalcForm />
            <RightSideBar />
          </div>
          </div>
        </div>
      ) : (
        <div className={styless.box}>
          <Container>
            <Header />
            <CalcForm />
          </Container>
          <ContainerSideBar>
            {onlyWidth >= 1280 ? <UserInfo /> : ''}
            <RightSideBar />
          </ContainerSideBar>
        </div>
      )}
    </>
  )
}

export default MainCalculatorPage

import ContainerSideBar from '../ContainerSideBar'
import Container from '../Container'
import RightSideBar from '../RightSideBar'
import DiaryPage from '../DiaryPage/DiaryPage'
import Header from '../Header'
import UserInfo from '../Header/UserInfo'
import { useWindowWidth } from '@react-hook/window-size'
import styless from './styless.module.scss'

const MainDiaryPage = () => {
  const onlyWidth = useWindowWidth()
  return (
    <>
      {onlyWidth >= 1280 ? (
          <div  className={styless.wrapper}>
        <div className={styless.section}>
          <div className={styless.header}>
            <Header />
            <div className={styless.headerBox}>
              {onlyWidth >= 1280 ? <UserInfo /> : ''}
            </div>
          </div>

          <div className={styless.box}>
            <div className={styless.case}>
              <DiaryPage />
            </div>

            <RightSideBar />
          </div>
        </div>
        </div>
      ) : (
        <div className={styless.box}>
          <Container>
            <Header />
            <DiaryPage />
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

export default MainDiaryPage
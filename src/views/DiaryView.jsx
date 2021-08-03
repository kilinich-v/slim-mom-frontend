import { createUseStyles } from 'react-jss'
import ContainerSideBar from '../components/ContainerSideBar'
import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'
import DiaryPage from '../components/DiaryPage/DiaryPage'
import Header from '../components/Header'
import UserInfo from '../components/Header/UserInfo'
import { useWindowWidth } from '@react-hook/window-size'
const useStyles = createUseStyles({
  wrapper: {
    '@media (min-width: 1280px)': {
      background:
        'linear-gradient(to right, hsla(0, 0%, 100%, 0) 60%, rgba(240, 241, 243, 1) 40%)',
    },
  },
  box: {
    '@media (min-width: 1280px)': {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    },
  },
  header: {
    paddingLeft: 90,
    display: 'flex',
  },
  case: {
    // paddingLeft: 115,
  },
  headerBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})
const DiaryView = () => {
  const styless = useStyles()
  const onlyWidth = useWindowWidth()
  return (
    <>
      {onlyWidth > 1280 ? (
        <div className={styless.wrapper}>
          <div className={styless.header}>
            <Header />
            <div className={styless.headerBox}>
              {onlyWidth > 1280 ? <UserInfo /> : ''}
            </div>
          </div>

          <div className={styless.box}>
            <div className={styless.case}>
              <DiaryPage />
            </div>

            <RightSideBar />
          </div>
        </div>
      ) : (
        <div className={styless.box}>
          <Container>
            <Header />
            <DiaryPage />
          </Container>
          <ContainerSideBar>
            {onlyWidth > 1280 ? <UserInfo /> : ''}
            <RightSideBar />
          </ContainerSideBar>
        </div>
      )}
    </>
  )
}

export default DiaryView

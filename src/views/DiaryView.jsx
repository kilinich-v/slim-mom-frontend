import { createUseStyles } from 'react-jss'
import ContainerSideBar from '../components/ContainerSideBar'
import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'
import DiaryPage from '../components/DiaryPage/DiaryPage'
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
const DiaryView = () => {
  const styless = useStyles()
  const onlyWidth = useWindowWidth()
  return (
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
  )
}

export default DiaryView

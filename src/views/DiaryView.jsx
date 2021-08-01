import { createUseStyles } from 'react-jss'
import ContainerSideBar from '../components/ContainerSideBar'
import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'
import DiaryPage from '../components/DiaryPage/DiaryPage'

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
  return (
    <div className={styless.box}>
      <Container>
        <DiaryPage />
      </Container>
      <ContainerSideBar>
        <RightSideBar />
      </ContainerSideBar>
    </div>
  )
}

export default DiaryView

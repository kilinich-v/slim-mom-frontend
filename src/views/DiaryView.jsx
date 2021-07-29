import ContainerSideBar from '../components/ContainerSideBar'
import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'
import DiaryPage from '../components/DiaryPage/DiaryPage'

const DiaryView = () => {
  return (
    <div>
      <ContainerSideBar>
      <Container>
        <div className="container_wrap">
          <DiaryPage />
          <RightSideBar />
        </div>
      </Container>
      </ContainerSideBar>
    </div>
  )
}

export default DiaryView

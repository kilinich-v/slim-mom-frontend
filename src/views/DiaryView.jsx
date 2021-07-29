import ContainerSideBar from '../components/ContainerSideBar'
import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'

const DiaryView = () => {
  return (
    <div>
      <ContainerSideBar>
      <Container>
        <RightSideBar />
      </Container>
      </ContainerSideBar>
    </div>
  )
}

export default DiaryView

import Container from '../components/Container'
import RightSideBar from '../components/RightSideBar'
import DiaryPage from '../components/DiaryPage/DiaryPage'

const DiaryView = () => {
  return (
    <div>
      <Container>
        <div className="container_wrap">
          <DiaryPage />
          <RightSideBar />
        </div>
      </Container>
    </div>
  )
}

export default DiaryView

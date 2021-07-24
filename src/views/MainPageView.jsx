import Container from '../components/Container'
import CalcForm from '../components/CalcForm'
import ContentImagesHomePage from '../components/ContentImagesHomePage'

const MainPageView = () => {
  return (
    <div>
      <ContentImagesHomePage />
      <Container>
        <CalcForm />
      </Container>
    </div>
  )
}

export default MainPageView

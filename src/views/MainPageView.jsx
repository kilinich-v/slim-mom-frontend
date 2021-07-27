import Container from '../components/Container'
import CalcForm from '../components/CalcForm'
import ContentImagesHomePage from '../components/ContentImagesHomePage'

const MainPageView = () => {
  return (
    <>
      <ContentImagesHomePage />
      <Container>
        <CalcForm />
      </Container>
    </>
  )
}

export default MainPageView

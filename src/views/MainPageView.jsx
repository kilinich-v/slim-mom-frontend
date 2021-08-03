import Container from '../components/Container'
import CalcForm from '../components/CalcForm'
import ContentImagesHomePage from '../components/ContentImagesHomePage'
import Header from '../components/Header'
const MainPageView = () => {
  return (
    <>
      <ContentImagesHomePage />
      <Container>
        <Header />
      </Container>
      <Container>
        <CalcForm />
      </Container>
    </>
  )
}

export default MainPageView

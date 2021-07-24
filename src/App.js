import Container from './components/Container'
import CalcForm from './components/CalcForm'
import ContentImagesHomePage from './components/ContentImagesHomePage'
import RightSideBar from './components/RightSideBar'


function App() {
  return (
    <>
      <ContentImagesHomePage />
      <Container>
        <CalcForm />
        <RightSideBar />
      </Container>
    </>
  )
}

export default App

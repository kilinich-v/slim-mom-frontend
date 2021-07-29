import Container from '../components/Container'
import ContentImagesHomePage from '../components/ContentImagesHomePage'
import RegistrationForm from '../components/Registration/registration'

const AuthView = () => {
  return (
    <div>
      <ContentImagesHomePage />
      <Container>
        <RegistrationForm />
      </Container>
    </div>
  )
}

export default AuthView

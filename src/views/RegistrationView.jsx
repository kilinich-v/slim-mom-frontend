import Container from '../components/Container'
import ContentImagesHomePage from '../components/ContentImagesHomePage'
import RegistrationForm from '../components/Registration/registration'
import Logo from '../components/Header/Logo'
const AuthView = () => {
  return (
    <div>
      <ContentImagesHomePage />
      <Container>
        <Logo />
        <RegistrationForm />
      </Container>
    </div>
  )
}

export default AuthView

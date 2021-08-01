import Container from '../components/Container'
import ContentImagesRegPage from '../components/ContentImagesRegPage'
import RegistrationForm from '../components/Registration/registration'
import Logo from '../components/Header/Logo'
const AuthView = () => {
  return (
    <div>
      <ContentImagesRegPage />
      <Container>
        <Logo />
        <RegistrationForm />
      </Container>
    </div>
  )
}

export default AuthView

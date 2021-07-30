import Container from '../components/Container'
import ContentImagesHomePage from '../components/ContentImagesHomePage'
import AuthForm from '../components/Auth/auth'
import Logo from '../components/Header/Logo'
const AuthView = () => {
  return (
    <div>
      <ContentImagesHomePage />
      <Container>
        <Logo />
        <AuthForm />
      </Container>
    </div>
  )
}

export default AuthView

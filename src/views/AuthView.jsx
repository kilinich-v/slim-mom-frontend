import Container from '../components/Container'
import ContentImagesRegPage from '../components/ContentImagesRegPage'
import AuthForm from '../components/Auth/auth'
import Logo from '../components/Header/Logo'
const AuthView = () => {
  return (
    <div>
      <ContentImagesRegPage />
      <Container>
        <Logo />
      </Container>
      <Container>
        <AuthForm />
      </Container>
    </div>
  )
}

export default AuthView

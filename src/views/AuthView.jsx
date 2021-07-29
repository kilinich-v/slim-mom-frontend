import Container from '../components/Container'
import ContentImagesHomePage from '../components/ContentImagesHomePage'
import AuthForm from '../components/Auth/auth'

const AuthView = () => {
  return (
    <div>
      <ContentImagesHomePage />
      <Container>
        <AuthForm />
      </Container>
    </div>
  )
}

export default AuthView

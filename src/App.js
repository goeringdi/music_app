
import { Container, Footer, Wrapper } from './App.styled';
import { AppRoutes } from "./protected-route/routes";

function App() {

  return (
    <Wrapper>
      <Container>
          <AppRoutes />
          <Footer></Footer>
      </Container>
    </Wrapper>
  )
}

export default App

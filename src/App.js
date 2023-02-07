import { Container, Footer, Wrapper } from './App.styled';
import { AppRoutes } from "./routes";

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

import './css/style.css';
import Nav from './Header/Header';
import MenuBar from './MenuBar/MenuBar1';
import SideBar from './SideBar/SideBar';
import Player from './Player/Player';
import MenuBarHeader from './MenuBar/MenuBar';
import { MainCenterBlock } from './MenuBar/MenuBar.styled';
import { Container, Footer, Main, Wrapper } from './App.styled';

function App() {
  return ( 
    <Wrapper>
      <Container>
        <Main>
          <Nav />
          <MainCenterBlock>
            <MenuBarHeader />
            <MenuBar />
          </MainCenterBlock>
          <SideBar />
          <Player />
        </Main>
        <Footer></Footer>
      </Container>
    </Wrapper>
  )
}

export default App

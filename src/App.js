import './css/style.css';
import Nav from './Header';
import MenuBar from './MenuBar1';
import SideBar from './SideBar';
import Player from './Player';



function App() {
  return (
    <div className="wrapper">
        <div className="container">
            <main className="main">
              <Nav />;
              <MenuBar />;
              <SideBar />;
              <Player />;          
            </main>            
            <footer className="footer"></footer>
        </div>
    </div>
  );
}

export default App;

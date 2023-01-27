import './css/style.css';
import Header from './Header';
import MenuBar from './MenuBar';
import SideBar from './SideBar';
import Player from './Player';


function App() {
  return (
    <div className="wrapper">
        <div className="container">
            <main className="main">
              <Header />;
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

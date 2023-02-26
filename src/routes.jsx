import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HundredHits } from "./pages/HundredHits";
import { Indi } from "./pages/Indi";
import { Login } from "./pages/Login";
import { MyTracks } from "./pages/MyTracks";
import { NotFound } from "./pages/Notfound";
import { PlaylistOfTheDay } from "./pages/PlaylistOfTheDay";
import { Register } from "./pages/Registration";
import { ProtectedRoute } from "./protected-route";
import Cookies from 'js-cookie';
import { ChangeThemeTrack } from "./context/switcher";
import { Outlet } from 'react-router-dom';
import { Main } from './App.styled';
import Nav from './components/Header/Header';
import { MainCenterBlock } from './components/MenuBar/MenuBar.styled';
import MenuBarHeader from './components/MenuBar/MenuBar';
import Player from './components/Player/Player';

const Layout = () => {
   return (
      <Main>
        <Nav />
        <MainCenterBlock>
          <MenuBarHeader />
          <Outlet/>
        </MainCenterBlock>
        <Player />
      </Main>
   )
}



export const AppRoutes = () => {
let Token = Cookies.get('token');
console.log(Token)
  return (
<Router>
   <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route
          path="/main"
          element={
                <ProtectedRoute isAllowed={Boolean(Token)}>
                  <ChangeThemeTrack />
                </ProtectedRoute>
                }
              />
    <Route element={<Layout/>}>
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/playlistoftheday" element={<PlaylistOfTheDay />} />
        <Route path="/hundredhits" element={<HundredHits />} />
        <Route path="/indi" element={<Indi />} />
        <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</Router>
  );
};
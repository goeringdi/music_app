import { Routes, Route } from "react-router-dom";
import { HundredHits } from "./pages/HundredHits";
import { Indi } from "./pages/Indi";
import { Login } from "./pages/Login";
// import { MainPage } from "./pages/Main";
import { MyTracks } from "./pages/MyTracks";
import { NotFound } from "./pages/Notfound";
import { PlaylistOfTheDay } from "./pages/PlaylistOfTheDay";
import { Register } from "./pages/Registration";
import { ProtectedRoute } from "./protected-route";
import Cookies from 'js-cookie';
import { ChangeThemeTrack } from "./context/switcher";
// import {ChangeTheme} from './context/switcher;'




export const AppRoutes = () => {
let Token = Cookies.get('token');
console.log(Token)
  return (
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
      <Route path="/mytracks" element={<MyTracks />} />
      <Route path="/playlistoftheday" element={<PlaylistOfTheDay />} />
      <Route path="/hundredhits" element={<HundredHits />} />
      <Route path="/indi" element={<Indi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
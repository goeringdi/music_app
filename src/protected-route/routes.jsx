import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import { ChangeThemeTrack } from '../context/switcher'
import SelectPlaylist from '../pages/SelectPlaylist/SelectPlaylist'
import UserPlaylist from '../pages/UserPlaylist/UserPlaylist'
import NotFound from '../pages/NotFound/NotFound'
import ProtectedRoute from './index'
import NavLayout from '../components/Layuot/NavLayout/NavLayout'
import PlayerLayout from '../components/Layuot/PlayerLayout/PlayerLayout'

export default function Routes() {
    const isLogin = useSelector((state) => state.auth.isLogin)

    return (
        <ReactRoutes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<NavLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/" element={<ProtectedRoute isLogin={isLogin} />}>
                <Route element={<NavLayout />}>
                    <Route element={<PlayerLayout />}>
                        <Route index element={<ChangeThemeTrack />} />
                        <Route path="tracks" element={<ChangeThemeTrack />} />
                        <Route
                            path="playlist/:id"
                            element={<SelectPlaylist />}
                        />
                        <Route path="my_playlist" element={<UserPlaylist />} />
                    </Route>
                </Route>
            </Route>
        </ReactRoutes>
    )
}
import { Link } from 'react-router-dom'
import { useGetPlaylistsQuery } from '../../api/musicApi'
import SidebarItem from '../SidebarItem/SidebarItem'
import playlist1 from '../../img/playlist01.png'
import playlist2 from '../../img/playlist02.png'
import playlist3 from '../../img/playlist03.png'
import * as S from './styles'
import { useThemeContext } from '../../context/theme'
import exitLight from '../../img/icon/exitLight.svg'
import exitDark from '../../img/icon/exitDark.svg'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const playlistArr = [playlist1, playlist2, playlist3]

    const { data, isSuccess, isLoading } = useGetPlaylistsQuery('')
    
    const HandleSignOut = () => {
        navigate("/login", {replace: true});
      };
    
      const { theme } = useThemeContext();
      const navigate = useNavigate()

    return (
        <S.Sidebar style={{ backgroundColor: theme.background, color: theme.color }}>
            <S.SidebarPersonal>
                {theme.colorA ? (
                    <S.SidebarExit onClick={HandleSignOut} src={exitLight} alt="exit" />
                    ) : ( 
                    <S.SidebarExit onClick={HandleSignOut} src={exitDark} alt="exit" />
                )}
                </S.SidebarPersonal>
            <S.SidebarBlock>
                <S.SidebarList>
                    {isSuccess &&
                        data.map(({ id }) => (
                            <Link to={`/playlist/${id}`} key={id}>
                                <SidebarItem
                                    id={id}
                                    src={playlistArr[id - 1]}
                                    isLoading={isLoading}
                                />
                            </Link>
                        ))}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.Sidebar>
    )
}

import { Outlet } from 'react-router-dom'
import Navigation from '../../MenuNav/Navigation'
import * as S from './styles'
import { useThemeContext } from '../../../context/theme'

export default function NavLayout() {
    const { theme } = useThemeContext();

    return (
        <S.LayoutWrapper>
            <S.LayoutContainer style={{ backgroundColor: theme.background, color: theme.color }}>
                <S.Main>
                    <Navigation />
                    <Outlet />
                </S.Main>
            </S.LayoutContainer>
        </S.LayoutWrapper>
    )
}
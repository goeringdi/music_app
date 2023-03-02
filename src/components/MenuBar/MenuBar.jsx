import search from '../../img/icon/search.svg';
import logo from '../../img/logo.png';

import 'react-loading-skeleton/dist/skeleton.css';
import { CenterBlockSearch, MainCenterBlock, SearchSvg, SearchText} from './MenuBar.styled'
import { useThemeContext } from '../../context/theme';


const MenuBarHeader = function () {


const { theme } = useThemeContext();
console.log(theme)
    return (
        <MainCenterBlock>
        <CenterBlockSearch>
            {theme.colorA ? (
            <SearchSvg  src={logo} alt= "search"/>               
            ) : (
            <SearchSvg  src={search} alt= "search"/>               
            )}
            <SearchText placeholderColor={theme.placeholder}   type="search" placeholder="Поиск" name="search"/>
        </CenterBlockSearch>
    </MainCenterBlock>
    )
}

export default MenuBarHeader;
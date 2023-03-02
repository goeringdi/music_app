import search from '../../img/icon/search.svg';
// import searchLight from '../../img/icon/searchLight.svg';

import 'react-loading-skeleton/dist/skeleton.css';
import { CenterBlockSearch, MainCenterBlock, SearchSvg, SearchText} from './MenuBar.styled'
import { useThemeContext } from '../../context/theme';


const MenuBarHeader = function () {


const { theme } = useThemeContext();
console.log(theme)
    return (
        <MainCenterBlock>
        <CenterBlockSearch>
            <SearchSvg  src={search} alt= "search"/>
            <SearchText placeholderColor={theme.placeholder}   type="search" placeholder="Поиск" name="search"/>
        </CenterBlockSearch>
    </MainCenterBlock>
    )
}

export default MenuBarHeader;
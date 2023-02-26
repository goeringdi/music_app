import search from '../../img/icon/search.svg';
// import searchLight from '../../img/icon/searchLight.svg';
import React, {useState} from 'react';
import ShowAuthor from '../Suggest/Author';
import ShowYear from '../Suggest/Year';
import ShowGenre from '../Suggest/Genre';
import 'react-loading-skeleton/dist/skeleton.css';
import {CenterBlockFilter, CenterBlockH2, Filter1, Filter2, Filter3, CenterBlockSearch, FilterTitle, MainCenterBlock, SearchSvg, SearchText} from './MenuBar.styled'
import { useThemeContext } from '../../context/theme';


const MenuBarHeader = function () {

const [visibleAuthors, setVisibleAuthors] = useState(true);
const toggleVisibilityAuthors = () => {
    setVisibleAuthors(!visibleAuthors);
    setVisibleGenre(true);
    setVisibleYear(true);
}

const [visibleGenre, setVisibleGenre] = useState(true);
const toggleVisibilityGenre = () => {
    setVisibleAuthors(true);
    setVisibleGenre(!visibleGenre);
    setVisibleYear(true);
}
const [visibleYear, setVisibleYear] = useState(true);
const toggleVisibilityYear = () => {
    setVisibleAuthors(true);
    setVisibleGenre(true);
    setVisibleYear(!visibleYear);
}

const { theme } = useThemeContext();
    return (
        <MainCenterBlock>
        <CenterBlockSearch>
            <SearchSvg  src={search} alt= "search"/>
            <SearchText placeholderColor={theme.placeholder}   type="search" placeholder="Поиск" name="search"/>
        </CenterBlockSearch>
        <CenterBlockH2>Треки</CenterBlockH2>
        <CenterBlockFilter>
        <FilterTitle>
            Искать по:
        </FilterTitle>
        <Filter1 border={theme.border} hover={theme.hoverButton} hoverBorderColor={theme.borderHover} onClick={toggleVisibilityAuthors} role= "presentation">
            исполнителю
        </Filter1>
       {!visibleAuthors && (
        <ShowAuthor />
       )}
        <Filter2 border={theme.border} hover={theme.hoverButton} hoverBorderColor={theme.borderHover} onClick={toggleVisibilityYear} role= "presentation">
            году выпуска
        </Filter2>
        {!visibleYear && (
        <ShowYear />
       )}
        <Filter3 border={theme.border} hover={theme.hoverButton} onClick={toggleVisibilityGenre} role= "presentation">
            жанру
        </Filter3>
        {!visibleGenre && (
        <ShowGenre />
       )}
    </CenterBlockFilter>
    </MainCenterBlock>
    )
}

export default MenuBarHeader;
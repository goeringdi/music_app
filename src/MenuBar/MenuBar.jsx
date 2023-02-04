import search from '..//img/icon/search.svg';
import React, {useState} from 'react';
import ShowAuthor from '../Author';
import ShowYear from '../Year';
import ShowGenre from '../Genre';
import 'react-loading-skeleton/dist/skeleton.css';
import {CenterBlockFilter, CenterBlockH2, Filter1, Filter2, Filter3, CenterBlockSearch, FilterTitle, MainCenterBlock, SearchSvg, SearchText} from './MenuBar.styled'
import styled from 'styled-components';


function MenuBarHeader () {
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

const FilterButton1 = styled(Filter1) `
    color: ${(!visibleAuthors) ? "#D9B6FF" : "white"};
    border: ${(!visibleAuthors) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
`;

const FilterButton2 = styled(Filter2) `
    color: ${(!visibleYear) ? "#D9B6FF" : "white"};
    border: ${(!visibleYear) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
`;

const FilterButton3 = styled(Filter3) `
    color: ${(!visibleGenre) ? "#D9B6FF" : "white"};
    border: ${(!visibleGenre) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
`;
    return (
        <MainCenterBlock>
        <CenterBlockSearch>
            <SearchSvg src={search} alt= "search"/>
            <SearchText type="search" placeholder="Поиск" name="search"/>
        </CenterBlockSearch>
        <CenterBlockH2>Треки</CenterBlockH2>
        <CenterBlockFilter>
        <FilterTitle>
            Искать по:
        </FilterTitle>
        <FilterButton1 onClick={toggleVisibilityAuthors} role= "presentation">
            исполнителю
        </FilterButton1>
       {!visibleAuthors && (
        <ShowAuthor />
       )}
        <FilterButton2 onClick={toggleVisibilityYear} role= "presentation">
            году выпуска
        </FilterButton2>
        {!visibleYear && (
        <ShowYear />
       )}
        <FilterButton3  onClick={toggleVisibilityGenre} role= "presentation">
            жанру
        </FilterButton3>
        {!visibleGenre && (
        <ShowGenre />
       )}
    </CenterBlockFilter>
    </MainCenterBlock>
    )
}

export default MenuBarHeader;
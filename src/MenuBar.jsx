import search from '../src/img/icon/search.svg';
import React from 'react';
import ShowAuthor from './Author';
import ShowYear from './Year';
import ShowGenre from './Genre';
import styled from 'styled-components';


import 'react-loading-skeleton/dist/skeleton.css';



const { useState } = React;


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

    const Filter1 = styled.div`
        color: ${(!visibleAuthors) ? "#D9B6FF" : "white"};
        border: ${(!visibleAuthors) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
        `;
    const Filter2 = styled.div`
    color: ${(!visibleYear) ? "#D9B6FF" : "white"};
    border: ${(!visibleYear) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
    `;
    const Filter3 = styled.div`
    color: ${(!visibleGenre) ? "#D9B6FF" : "white"};
    border: ${(!visibleGenre) ? " 1px solid #D9B6FF" : "1px solid #FFFFFF"};
    `;

    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
            <img className= "search__svg" src={search} alt= "search"/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
        <div className="filter__title"  >
            Искать по:
        </div>
        <Filter1 className="filter__button button-author _btn-text" onClick={toggleVisibilityAuthors} role= "presentation">
            исполнителю
        </Filter1>
       {!visibleAuthors && (
        <ShowAuthor />
       )}
        <Filter2 className="filter__button button-year _btn-text" onClick={toggleVisibilityYear} role= "presentation">
            году выпуска
        </Filter2>
        {!visibleYear && (
        <ShowYear />
       )}
        <Filter3 className="filter__button button-genre _btn-text" onClick={toggleVisibilityGenre} role= "presentation">
            жанру
        </Filter3>
        {!visibleGenre && (
        <ShowGenre />
       )}
    </div>
    </div>
    )
}

export default MenuBarHeader;
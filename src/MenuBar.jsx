import search from '../src/img/icon/search.svg';
import watch from '../src/img/icon/watch.svg';
import React from 'react';
import ShowAuthor from './Author';
import ShowYear from './Year';
import ShowGenre from './Genre';
import styled from 'styled-components';
import note from '../src/img/icon/note.svg';
import like from '../src/img/icon/like.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';


const { useState } = React;


function MenuBar () {
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

    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibilitySkeleton = () => setIsLoading(true);

    useEffect(() => {
        let timeout = setTimeout(() => toggleVisibilitySkeleton(), 3000)
        return () => clearTimeout(timeout);
    })


    const Filter = styled.div`
        color: ${(visibleAuthors) => (visibleAuthors ? "white" : "palevioletred")};
        borderColor: ${(visibleAuthors) => (visibleAuthors ? "white" : "palevioletred")};
        `;

    if (!isLoading) {
        return(
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton height={30}  count={10} />
                </p>
            </SkeletonTheme>
        )
    } else {    
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
        <Filter>            
        <div className="filter__button button-author _btn-text" onClick={toggleVisibilityAuthors} role= "presentation">
            исполнителю
        </div>
        </Filter>
       {!visibleAuthors && (
        <ShowAuthor />
       )}
        <div className="filter__button button-year _btn-text" onClick={toggleVisibilityYear} role= "presentation">
            году выпуска
        </div>
        {!visibleYear && (
        <ShowYear />
       )}
        <div className="filter__button button-genre _btn-text" onClick={toggleVisibilityGenre} role= "presentation">
            жанру
        </div>
        {!visibleGenre && (
        <ShowGenre />
       )}
    </div>
    <div className="centerblock__content">
        <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <img className= "playlist-title__svg" src={watch} alt= "watch"/>  
                </div>
            </div>                      
        </div>
        <div className="content__playlist playlist main__centerblock">
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Guilt 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">4:44</span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>                         
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Elektro 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Dynoro, Outwork, Mr. Gee
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Elektro
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        2:22
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            I’m Fire 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Ali Bakgor
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        I’m Fire
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        2:22
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Non Stop 
                            <span className="track__title-span">
                                (Remix)
                            </span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Стоункат, Psychopath
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Non Stop
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        4:12
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Run Run 
                            <span className="track__title-span">
                                (feat. AR/CO)
                            </span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Jaded, Will Clarke, AR/CO
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Run Run
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        2:54
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Eyes on Fire 
                            <span className="track__title-span">
                                (Zeds Dead Remix)
                            </span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Blue Foundation, Zeds Dead
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Eyes on Fire
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        5:20
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Mucho Bien 
                            <span className="track__title-span">
                                (Hi Profile Remix)
                            </span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        HYBIT, Mr. Black, Offer Nissim, Hi Profile
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Mucho Bien
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        3:41
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Knives n Cherries 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        minthaze
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Captivating
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        1:48
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            How Deep Is Your Love 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Calvin Harris, Disciples
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        How Deep Is Your Love
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        3:32
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            Morena 
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        Tom Boxer
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        Soundz Made in Romania
                    </a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text">
                        3:36
                    </span>
                </div>
            </div>
        </div>
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"/>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://"> 
                        <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://"></a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://"></a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"/>
                    <span className="track__time-text"></span>
                </div>
            </div>
        </div>
    </div> 
    </div>
    
    )
        }
}

export default MenuBar;
import watch from '../src/img/icon/watch.svg';
import React from 'react';
import note from '../src/img/icon/note.svg';
import like from '../src/img/icon/like.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Box from './Box';


const { useState } = React;

const MenuBar = function () {

    const [isLoading, setIsLoading] = useState(true);
    const toggleVisibilitySkeleton = () => setIsLoading(false);

    useEffect(() => {
        let timeout = setTimeout(() => toggleVisibilitySkeleton(), 3000)
        return () => clearTimeout(timeout);
    })

    if (isLoading) {
        return(
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Box>
                <p>
                <Skeleton count={8} height={30} />;
                </p>
                </Box>
                
            </SkeletonTheme>
        )
    }    
        return (
        <div className="main__centerblock centerblock">    
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <img className= "playlist-title__svg" src={watch} alt= "watch"/>  
                </div>
            </div>
            <div className="content__playlist playlist">
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
        </div>
    
    )

}
export default MenuBar;
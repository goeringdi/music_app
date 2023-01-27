import note from '../src/img/icon/note.svg';
import like from '../src/img/icon/like.svg';
import prev from '../src/img/icon/prev.svg';
import play from '../src/img/icon/play.svg';
import next from '../src/img/icon/next.svg';
import repeat from '../src/img/icon/repeat.svg';
import shuffle from '../src/img/icon/shuffle.svg';
import dislike from '../src/img/icon/dislike.svg';
import volume from '../src/img/icon/volume.svg';


const Player = function() {
    return (
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                <div className="bar__player-block">
                    <div className="bar__player player">
                        <div className="player__controls">
                            <div className="player__btn-prev">
                                <svg className="player__btn-prev-svg" alt="prev">
                                    <use href={prev}></use>
                                </svg>
                            </div>
                            <div className="player__btn-play _btn">
                                <svg className="player__btn-play-svg" alt="play">
                                    <use href={play}></use>
                                </svg>
                            </div>
                            <div className="player__btn-next">
                                <svg className="player__btn-next-svg" alt="next">
                                    <use href={next}></use>
                                </svg>
                            </div>
                            <div className="player__btn-repeat _btn-icon">
                                <svg className="player__btn-repeat-svg" alt="repeat">
                                    <use href={repeat}></use>
                                </svg>
                            </div>
                            <div className="player__btn-shuffle _btn-icon">
                                <svg className="player__btn-shuffle-svg" alt="shuffle">
                                    <use href={shuffle}></use>
                                </svg>
                            </div>
                        </div>                            
                        <div className="player__track-play track-play">
                            <div className="track-play__contain">
                                <div className="track-play__image">
                                    <svg className="track-play__svg" alt="music">
                                        <use href={note}></use>
                                    </svg>
                                </div>
                                <div className="track-play__author">
                                    <a className="track-play__author-link" href="http://">
                                        Ты та...
                                    </a>
                                </div>
                                <div className="track-play__album">
                                    <a className="track-play__album-link" href="http://">
                                        Баста
                                    </a>
                                </div>
                            </div>
                            <div className="track-play__like-dis">
                                <div className="track-play__like _btn-icon">
                                    <svg className="track-play__like-svg" alt="like">
                                        <use href={like}></use>
                                    </svg>
                                </div>
                                <div className="track-play__dislike _btn-icon">
                                    <svg className="track-play__dislike-svg" alt="dislike">
                                        <use href={dislike}></use>
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="bar__volume-block volume">
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg" alt="volume">
                                        <use href={volume}></use>
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range"/>
                                </div>      
                           </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Player;
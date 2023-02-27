import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';
import prev from '../../img/icon/prev.svg';
import Play from '../../img/icon/play.svg';
import next from '../../img/icon/next.svg';
import Pause from '../../img/icon/pause.svg';
import repeat from '../../img/icon/repeat.svg';
import shuffle from '../../img/icon/shuffle.svg';
import dislike from '../../img/icon/dislike.svg';
import volume from '../../img/icon/volumeD.svg';
import {
  Bar,
  BarContent,
  BarPlayer,
  BarPlayerBlock,
  BarPlayerProgress,
  BarVolumeBlock,
  PlayerBtnNext,
  PlayerBtnNextSvg,
  PlayerBtnPlay,
  PlayerBtnPlaySvg,
  PlayerBtnPrev,
  PlayerBtnPrevSvg,
  PlayerBtnRepeat,
  PlayerBtnRepeatSvg,
  PlayerBtnShuffle,
  PlayerBtnShuffleSvg,
  PlayerControls,
  PlayerTrackPlay,
  TrackPlayAlbum,
  TrackPlayAlbumLink,
  TrackPlayAuthor,
  TrackPlayAuthorLink,
  TrackPlayContain,
  TrackPlayDislike,
  TrackPlayDislikeSvg,
  TrackPlayImage,
  TrackPlayLike,
  TrackPlayLikeDis,
  TrackPlayLikeSvg,
  TrackPlaySvg,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
  VolumeProgressLine,
  VolumeSvg,
  ProgressInput,
  PlayerBtnPause,
  PlayerBtnPauseSvg
} from './Player.styled';
import { useState, useEffect } from 'react';
import track from "./Bobby_Marleni_-_Dropin.mp3"; 
import useSound from "use-sound";
import { useThemeContext } from '../../context/theme';

// import {  AiFillPauseCircle } from "react-icons/ai";
// import { IconContext } from "react-icons";

const Player = function () {
  const { theme } = useThemeContext();

  const [isPlaying, setIsPlaying] = useState(false);
 
  const [seconds, setSeconds] = useState([]);
  const [play, { pause, duration, sound }] = useSound([track]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return ( 
    <Bar style={{ backgroundColor: theme.background, color: theme.color }}>
      <BarContent>
        <BarPlayerProgress style={{ backgroundColor: theme.background, color: theme.color }}>
    <Bar>
      <BarContent>
        <BarPlayerProgress>
        <ProgressInput
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
        </BarPlayerProgress>
        <BarPlayerBlock>
          <BarPlayer>
            <PlayerControls>
                
              <PlayerBtnPrev>
                <PlayerBtnPrevSvg src={prev} alt="prev" />
              </PlayerBtnPrev>
              {!isPlaying ? (
                <PlayerBtnPlay>
                <PlayerBtnPlaySvg src={Play} alt="play" onClick={playingButton}/>
              </PlayerBtnPlay>
              ) : (
                <PlayerBtnPause>
                <PlayerBtnPauseSvg src={Pause} alt="play" onClick={playingButton}/>
              </PlayerBtnPause>
              )}
              <PlayerBtnNext>
                <PlayerBtnNextSvg src={next} alt="next" />
              </PlayerBtnNext>
              <PlayerBtnRepeat>
                <PlayerBtnRepeatSvg src={repeat} alt="repeat" />
              </PlayerBtnRepeat>
              <PlayerBtnShuffle>
                <PlayerBtnShuffleSvg src={shuffle} alt="shuffle" />
              </PlayerBtnShuffle>
            </PlayerControls>
            <PlayerTrackPlay>
              <TrackPlayContain>
                <TrackPlayImage background={theme.backgroundNote}>
                  <TrackPlaySvg src={note} alt="music" />
                </TrackPlayImage>
                <TrackPlayAuthor>
                  <TrackPlayAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                    Ты та...
                  </TrackPlayAuthorLink>
                </TrackPlayAuthor>
                <TrackPlayAlbum>
                  <TrackPlayAlbumLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">Баста</TrackPlayAlbumLink>
                </TrackPlayAlbum>
              </TrackPlayContain>
              <TrackPlayLikeDis>
                <TrackPlayLike>
                  <TrackPlayLikeSvg src={like} alt="like" />
                </TrackPlayLike>
                <TrackPlayDislike>
                  <TrackPlayDislikeSvg src={dislike} alt="dislike" />
                </TrackPlayDislike>
              </TrackPlayLikeDis>
            </PlayerTrackPlay>
          </BarPlayer>
          <BarVolumeBlock>
            <VolumeContent>
              <VolumeImage>
                <VolumeSvg src={volume} alt="volume" />
              </VolumeImage>
              <VolumeProgress>
                <VolumeProgressLine type="range" name="range"  />
              </VolumeProgress>
            </VolumeContent>
          </BarVolumeBlock>
        </BarPlayerBlock>
      </BarContent>
    </Bar>
  )
}

export default Player

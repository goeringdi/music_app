import note from '../../img/icon/note.svg'
import like from '../../img/icon/like.svg'
import prev from '../../img/icon/prev.svg'
import play from '../../img/icon/play.svg'
import next from '../../img/icon/next.svg'
import repeat from '../../img/icon/repeat.svg'
import shuffle from '../../img/icon/shuffle.svg'
import dislike from '../../img/icon/dislike.svg'
import volume from '../../img/icon/volume.svg'
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
} from './Player.styled'

const Player = function () {
  return (
    <Bar>
      <BarContent>
        <BarPlayerProgress></BarPlayerProgress>
        <BarPlayerBlock>
          <BarPlayer>
            <PlayerControls>
              <PlayerBtnPrev>
                <PlayerBtnPrevSvg src={prev} alt="prev" />
              </PlayerBtnPrev>
              <PlayerBtnPlay>
                <PlayerBtnPlaySvg src={play} alt="play" />
              </PlayerBtnPlay>
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
                <TrackPlayImage>
                  <TrackPlaySvg src={note} alt="music" />
                </TrackPlayImage>
                <TrackPlayAuthor>
                  <TrackPlayAuthorLink href="http://">
                    Ты та...
                  </TrackPlayAuthorLink>
                </TrackPlayAuthor>
                <TrackPlayAlbum>
                  <TrackPlayAlbumLink href="http://">Баста</TrackPlayAlbumLink>
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
                <VolumeProgressLine type="range" name="range" />
              </VolumeProgress>
            </VolumeContent>
          </BarVolumeBlock>
        </BarPlayerBlock>
      </BarContent>
    </Bar>
  )
}

export default Player

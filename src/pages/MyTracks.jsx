import React from 'react';
import {
  MainCenterBlock,
  CenterBlockH2,
} from '../components/MenuBar/MenuBar.styled';
import {
  CenterBlockContent,
  ContentTitle,
  PlaylistTitleCol1,
  PlaylistTitleCol2,
  PlaylistTitleCol3,
  PlaylistTitleCol4,
  PlaylistTitleSvg,
  ContentPlaylist,
  PlaylistItem,
  PlaylistTrack,
  TrackTitle,
  TrackTitleImage,
  TrackTitleSvg,
  TrackTitleText,
  TrackTitleLink,
  TrackTitleSpan,
  TrackAuthor,
  TrackAuthorLink,
  TrackAlbum,
  TrackAlbumLink,
  TrackTime,
  TrackTimeSvg,
  TrackTimeText,
} from '../components/MenuBar/MenuBar1.styled';
import watch from '../img/icon/watch.svg';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';
import { Main } from '../App.styled';
import search from '..//img/icon/search.svg';
import Player from '../components/Player/Player';

export const MyTracks = function () {
  return (
    <Main>
      <MainCenterBlock>
        <CenterBlockH2>Мои треки</CenterBlockH2>
        <CenterBlockContent>
          <ContentTitle>
            <PlaylistTitleCol1>Трек</PlaylistTitleCol1>
            <PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</PlaylistTitleCol2>
            <PlaylistTitleCol3>АЛЬБОМ</PlaylistTitleCol3>
            <PlaylistTitleCol4>
              <PlaylistTitleSvg src={watch} alt="watch" />
            </PlaylistTitleCol4>
          </ContentTitle>
          <ContentPlaylist>
            <PlaylistItem>
              <PlaylistTrack>
                <TrackTitle>
                  <TrackTitleImage>
                    <TrackTitleSvg src={note} alt="music" />
                  </TrackTitleImage>
                  <TrackTitleText>
                    <TrackTitleLink href="http://">
                      Guilt
                      <TrackTitleSpan></TrackTitleSpan>
                    </TrackTitleLink>
                  </TrackTitleText>
                </TrackTitle>
                <TrackAuthor>
                  <TrackAuthorLink href="http://">Nero</TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                  <TrackAlbumLink href="http://">
                    Welcome Reality
                  </TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                  <TrackTimeSvg src={like} alt="time" />
                  <TrackTimeText>4:44</TrackTimeText>
                </TrackTime>
              </PlaylistTrack>
            </PlaylistItem>
            <PlaylistItem>
              <PlaylistTrack>
                <TrackTitle>
                  <TrackTitleImage>
                    <TrackTitleSvg src={note} alt="music" />
                  </TrackTitleImage>
                  <TrackTitleText>
                    <TrackTitleLink href="http://">
                      Elektro
                      <TrackTitleSpan></TrackTitleSpan>
                    </TrackTitleLink>
                  </TrackTitleText>
                </TrackTitle>
                <TrackAuthor>
                  <TrackAuthorLink href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                  <TrackAlbumLink href="http://">Elektro</TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                  <TrackTimeSvg src={like} alt="time" />
                  <TrackTimeText>2:22</TrackTimeText>
                </TrackTime>
              </PlaylistTrack>
            </PlaylistItem>
            <PlaylistItem>
              <PlaylistTrack>
                <TrackTitle>
                  <TrackTitleImage>
                    <TrackTitleSvg src={note} alt="music" />
                  </TrackTitleImage>
                  <TrackTitleText>
                    <TrackTitleLink href="http://">
                      I’m Fire
                      <TrackTitleSpan></TrackTitleSpan>
                    </TrackTitleLink>
                  </TrackTitleText>
                </TrackTitle>
                <TrackAuthor>
                  <TrackAuthorLink href="http://">Ali Bakgor</TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                  <TrackAlbumLink href="http://">I’m Fire</TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                  <TrackTimeSvg src={like} alt="time" />
                  <TrackTimeText>2:22</TrackTimeText>
                </TrackTime>
              </PlaylistTrack>
            </PlaylistItem>
            <PlaylistItem>
              <PlaylistTrack>
                <TrackTitle>
                  <TrackTitleImage>
                    <TrackTitleSvg src={note} alt="music" />
                  </TrackTitleImage>
                  <TrackTitleText>
                    <TrackTitleLink href="http://">
                      Non Stop
                      <TrackTitleSpan>(Remix)</TrackTitleSpan>
                    </TrackTitleLink>
                  </TrackTitleText>
                </TrackTitle>
                <TrackAuthor>
                  <TrackAuthorLink>Стоункат, Psychopath</TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                  <TrackAlbumLink href="http://">Non Stop</TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                  <TrackTimeSvg src={like} alt="time" />
                  <TrackTimeText>4:12</TrackTimeText>
                </TrackTime>
              </PlaylistTrack>
            </PlaylistItem>
          </ContentPlaylist>
        </CenterBlockContent>
      </MainCenterBlock>
      <Player />
    </Main>
  )
}

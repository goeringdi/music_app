import Header from '../components/Header/Header'
import React from 'react'
import {
  CenterBlockSearch,
  SearchSvg,
  SearchText,
  CenterBlockH2,
} from '../components/MenuBar/MenuBar.styled'
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
} from '../components/MenuBar/MenuBar1.styled'
import watch from '../img/icon/watch.svg'
import note from '../img/icon/note.svg'
import like from '../img/icon/like.svg'
import search from '..//img/icon/search.svg'
import { Main } from '../App.styled'
import Player from '../components/Player/Player'
import styled from 'styled-components'

export const MainCenterBlock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 210px 20px 111px;
`

export const PlaylistOfTheDay = function () {
  return (
    <Main>
      <Header />
      <MainCenterBlock>
        <CenterBlockSearch>
          <SearchSvg src={search} alt="search" />
          <SearchText type="search" placeholder="Поиск" name="search" />
        </CenterBlockSearch>
        <CenterBlockH2>Плейлист дня </CenterBlockH2>
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

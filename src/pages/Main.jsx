import Nav from '../components/Header/Header';
import MenuBar from '../components/MenuBar/MenuBar1';
import SideBar from '../components/SideBar/SideBar';
import Player from '../components/Player/Player';
import MenuBarHeader from '../components/MenuBar/MenuBar';
import { MainCenterBlock } from '../components/MenuBar/MenuBar.styled';
import { Main } from '../App.styled';
import React from 'react';
import { useThemeContext } from '../context/theme';

export const MainPage = function () {
  const {theme}  = useThemeContext();

  return (
    <Main style={{ backgroundColor: theme.background, color: theme.color }}>
      <Nav />
      <MainCenterBlock>
        <MenuBarHeader />
        <MenuBar />
      </MainCenterBlock>
      <SideBar />
      <Player />
    </Main>
  )
}

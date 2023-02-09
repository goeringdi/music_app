import Nav from '../components/Header/Header'
import MenuBar from '../components/MenuBar/MenuBar1'
import SideBar from '../components/SideBar/SideBar'
import Player from '../components/Player/Player'
import MenuBarHeader from '../components/MenuBar/MenuBar'
import { MainCenterBlock } from '../components/MenuBar/MenuBar.styled'
import { Main } from '../App.styled'
import React from 'react'

export const MainPage = function () {
  return (
    <Main>
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

import Nav from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar1';
import SideBar from '../SideBar/SideBar';
import Player from '../Player/Player';
import MenuBarHeader from '../MenuBar/MenuBar';
import { MainCenterBlock } from '../MenuBar/MenuBar.styled';
import { Main } from '../App.styled';
import React from 'react';

export const MainPage = function() {
    return(
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
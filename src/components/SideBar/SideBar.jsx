import playlist01 from '../../img/playlist01.png';
import exitDark from '../../img/icon/exitDark.svg';
import playlist02 from '../../img/playlist02.png';
import playlist03 from '../../img/playlist03.png';
import BoxSideBar from '../BoxSkeleton/BoxSideBar';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import React from 'react';
import { useEffect } from 'react';
import {
  MainSidebar,
  SidebarExit,
  SidebarBlock,
  SidebarImg,
  SidebarItem,
  SidebarLink,
  SidebarList,
  SidebarPersonal,
} from './SideBar.styled';
import { useNavigate } from 'react-router-dom';


const { useState } = React

const SideBar = function () {
  const navigate = useNavigate()

  const handlePlaylistOfTheDay = () => {
    navigate('/playlistoftheday', { replace: true })
  }

  const handleHundredHits = () => {
    navigate('/hundredhits', { replace: true })
  }

  const handleIndi = () => {
    navigate('/indi', { replace: true })
  }

  const [isLoading, setIsLoading] = useState(true)
  const toggleVisibilitySkeleton = () => setIsLoading(false)

  const HandleSignOut = () => {
    navigate("/", {replace: true});
  };

  useEffect(() => {
    let timeout = setTimeout(() => toggleVisibilitySkeleton(), 3000)
    return () => clearTimeout(timeout)
  })
  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BoxSideBar>
          <p>
            <Skeleton count={3} height={150} />
          </p>
        </BoxSideBar>
      </SkeletonTheme>
    )
  }
  return (
    <MainSidebar>
      <SidebarPersonal>
        <SidebarExit onClick={HandleSignOut} src={exitDark} alt="exit" />
      </SidebarPersonal>
      <SidebarBlock>
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarImg
                onClick={handlePlaylistOfTheDay}
                src={playlist01}
                alt="day's playlist"
              />
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarImg
                onClick={handleHundredHits}
                src={playlist02}
                alt="day's playlist"
              />
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarImg
                onClick={handleIndi}
                src={playlist03}
                alt="day's playlist"
              />
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </SidebarBlock>
    </MainSidebar>
  )
}

export default SideBar

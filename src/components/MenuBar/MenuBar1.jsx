import watch from '../../img/icon/watch.svg';
import React from 'react';
import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import BoxImg from '../BoxSkeleton/BoxImg';
import BoxTrack from '../BoxSkeleton/BoxTrack';
import BoxAuthor from '../BoxSkeleton/BoxAuthor';
import BoxAlbum from '../BoxSkeleton/BoxAlbum';
import BoxLike from '../BoxSkeleton/BoxLike';
import BoxTime from '../BoxSkeleton/BoxTime';
import { MainCenterBlock } from './MenuBar.styled';
import { CenterBlockContent, ContentPlaylist, ContentTitle, PlaylistItem, PlaylistTitleCol1, PlaylistTitleCol2, PlaylistTitleCol3, PlaylistTitleCol4, PlaylistTitleSvg, PlaylistTrack, TrackAlbum, TrackAlbumLink, TrackAuthor, TrackAuthorLink, TrackTime, TrackTimeSvg, TrackTimeText, TrackTitle, TrackTitleImage, TrackTitleLink, TrackTitleSpan, TrackTitleSvg, TrackTitleText } from './MenuBar1.styled';
import { useThemeContext } from '../../context/theme';


const { useState } = React;

const MenuBar = function () {
  const { theme } = useThemeContext();


    const [isLoading, setIsLoading] = useState(true);
    const toggleVisibilitySkeleton = () => setIsLoading(false);

    useEffect(() => {
        let timeout = setTimeout(() => toggleVisibilitySkeleton(), 3000)
        return () => clearTimeout(timeout);
    })

    if (isLoading) {
        return(
            <SkeletonTheme baseColor="#202020" highlightColor="#444" display='flex' flexDirection='column'>
                <BoxImg>
                <p>
                <Skeleton count={8} height={51} />
                </p>
                </BoxImg>
                <BoxTrack>
                <p>
                <Skeleton count={8} height={24} />
                </p>
                </BoxTrack>
                <BoxAuthor>
                <p>
                <Skeleton count={8} height={24} />
                </p>
                </BoxAuthor>
                <BoxAlbum>
                <p>
                <Skeleton count={8} height={24} />
                </p>
                </BoxAlbum>
                <BoxLike>
                <p>
                <Skeleton count={8} height={12} />
                </p>
                </BoxLike>
                <BoxTime>
                <p>
                <Skeleton count={8} height={24} />
                </p>
                </BoxTime>
                
            </SkeletonTheme>
        )
    }    
        return (
        <MainCenterBlock>    
        <CenterBlockContent>
            <ContentTitle>
                <PlaylistTitleCol1>Трек</PlaylistTitleCol1>
                <PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</PlaylistTitleCol2>
                <PlaylistTitleCol3>АЛЬБОМ</PlaylistTitleCol3>
                <PlaylistTitleCol4>
                    <PlaylistTitleSvg src={watch} alt= "watch"/>  
                </PlaylistTitleCol4>
            </ContentTitle>
            <ContentPlaylist>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Guilt 
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">Nero</TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">Welcome Reality</TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>4:44</TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>                         
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Elektro 
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Dynoro, Outwork, Mr. Gee
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Elektro
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                2:22
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>                         
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    I’m Fire  
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Ali Bakgor
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                I’m Fire
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                2:22
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Non Stop 
                                    <TrackTitleSpan>
                                        (Remix)
                                    </TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }}>
                                Стоункат, Psychopath
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Non Stop
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                4:12
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Run Run 
                                    <TrackTitleSpan>
                                        (feat. AR/CO)
                                    </TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Jaded, Will Clarke, AR/CO
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Run Run
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                2:54
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Eyes on Fire 
                                    <TrackTitleSpan>
                                        (Zeds Dead Remix)
                                    </TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Blue Foundation, Zeds Dead
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Eyes on Fire
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                5:20
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Mucho Bien 
                                    <TrackTitleSpan>
                                        (Hi Profile Remix)
                                    </TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                HYBIT, Mr. Black, Offer Nissim, Hi Profile
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Mucho Bien
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                3:41
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Knives n Cherries 
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                minthaze
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Captivating
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                1:48
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    How Deep Is Your Love 
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Calvin Harris, Disciples
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                How Deep Is Your Love
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                3:32
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
                <PlaylistItem>
                    <PlaylistTrack>
                        <TrackTitle>
                            <TrackTitleImage background={theme.backgroundNote}>
                                <TrackTitleSvg src={note} alt="music"/>
                            </TrackTitleImage>
                            <TrackTitleText>
                                <TrackTitleLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                    Morena 
                                    <TrackTitleSpan></TrackTitleSpan>
                                </TrackTitleLink>
                            </TrackTitleText>
                        </TrackTitle>
                        <TrackAuthor>
                            <TrackAuthorLink style={{ backgroundColor: theme.background, color: theme.color }} href="http://">
                                Tom Boxer
                            </TrackAuthorLink>
                        </TrackAuthor>
                        <TrackAlbum>
                            <TrackAlbumLink href="http://">
                                Soundz Made in Romania
                            </TrackAlbumLink>
                        </TrackAlbum>
                        <TrackTime>
                            <TrackTimeSvg src={like} alt="time"/>
                            <TrackTimeText>
                                3:36
                            </TrackTimeText>
                        </TrackTime>
                    </PlaylistTrack>
                </PlaylistItem>
            </ContentPlaylist>                        
        </CenterBlockContent>
        </MainCenterBlock>
    )

}
export default MenuBar;
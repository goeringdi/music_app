import styled from "styled-components";

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`;


export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2E2E2E;
`;

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const PlayerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const PlayerBtnPrev = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    margin-right: 23px;
`;


export const PlayerBtnPrevSvg = styled.img`
    width: 15px;
    height: 14px;
`;

export const PlayerBtnPlay = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    margin-right: 23px;
`;


export const PlayerBtnPlaySvg = styled.img`
    width: 22px;
    height: 20px;
    fill: #D9D9D9;
`;
export const PlayerBtnNext = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    margin-right: 28px;
    fill: #a53939;
`;


export const PlayerBtnNextSvg = styled.img`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #D9D9D9;
`;
export const PlayerBtnRepeat = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    margin-right: 24px;
`;


export const PlayerBtnRepeatSvg = styled.img`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const PlayerBtnShuffle = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
`;


export const PlayerBtnShuffleSvg = styled.img`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const PlayerTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;


export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author''image album';
    align-items: center;
`;
export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`;


export const TrackPlaySvg = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`;


export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`;


export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const TrackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;


export const TrackPlayLike = styled.div`
    padding: 5px;
    &:hover svg {
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    &:active svg {
        fill: transparent;
        stroke: #FFFFFF;
        cursor: pointer;   
    }
}
`;
export const TrackPlayLikeSvg = styled.img`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;
export const TrackPlayDislike = styled.div`
padding: 5px;
&:hover svg {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
&:active svg {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;   
}
}
`;

export const TrackPlayDislikeSvg = styled.img`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
    &:active {
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;
export const BarVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`;
export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;
export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;
export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;
export const VolumeProgress = styled.div`
    width: 109px;
    cursor: pointer;
`;
export const VolumeProgressLine = styled.input`
    width: 109px;
    cursor: pointer;
`;

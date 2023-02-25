import styled from "styled-components";

export const MainCenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

export const CenterBlockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchSvg = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    &::placeholder {
        background-color: transparent;
        color: ${props => props.placeholder};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const CenterBlockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;

export const CenterBlockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const Filter1 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: ${props => props.border};
    border-radius: 60px;
    padding: 6px 20px;
    cursor: pointer;
    &:active {
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }
    &:hover {
        border-color: ${props => props.hover};
        color: ${props => props.hover};
        cursor: pointer;
    }
    &:not(:last-child) {
        margin-right: 10px;
    }
    `;

export const Filter2 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: ${props => props.border};
border-radius: 60px;
padding: 6px 20px;
cursor: pointer;
&:active {
    border-color: #D9B6FF;
    color: #D9B6FF;
    cursor: pointer;
}
&:hover {
    border-color: ${props => props.hover};
    color: ${props => props.hover};
    cursor: pointer;
}
&:not(:last-child) {
    margin-right: 10px;
}
`;

export const Filter3 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: ${props => props.border};
border-radius: 60px;
padding: 6px 20px;
cursor: pointer;
&:active {
    border-color: #D9B6FF;
    color: #D9B6FF;
    cursor: pointer;
}
&:hover {
    border-color: ${props => props.hover};
    color: ${props => props.hover};
    cursor: pointer;
}
&:not(:last-child) {
    margin-right: 10px;
}
`;

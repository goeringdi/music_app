import styled from "styled-components";
import ErrorImg from "../img/smile_crying.png";
import React from 'react';
import { useNavigate } from "react-router-dom";

export const ErrorBlock = styled.div`
    width: 431px;
    height: 366px;
    padding-left: 1030px;
    padding-top: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;

export const ErrorTitle  = styled.h1`
    width: 255px;
    height: 168px;
    left: 833px;
    top: 356px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    margin-bottom: 8px;
`;

export const ErrorSubtitle = styled.h2`
    width: 326px;
    height: 40px;
    left: 777px;
    top: 527px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
`;

export const ErrorTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 19px;
`;

export const ErrorText = styled.p`
    width: 431px;
    height: 48px;
    left: 745px;
    top: 586px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #4E4E4E;
    margin-bottom: 36px;
`;

export const ErrorSubtitleImage = styled.img`
`;

export const ErrorButton = styled.button`
    width: 278px;
    height: 82px;
    background: #580EA2;
    border-radius: 6px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    padding: 16px;
    text-align: center;
    transition: all 0.3s;
    &:hover{
        background: #3F007D;
    }
    &:active{
        background: #271A58;
    }
`;


export const NotFound = function() {

    const navigate = useNavigate();
    const HandleBackButtonClick = () => {
        navigate("/", {replace: true});
    };

    return (
        <ErrorBlock >
            <ErrorTitle>404</ErrorTitle>
            <ErrorTextBox>
                <ErrorSubtitle>Страница не найдена</ErrorSubtitle>
                <ErrorSubtitleImage src={ErrorImg} alt="crying" />
            </ErrorTextBox>
            <ErrorText>Возможно, она была удалена или перенесена на другой адрес</ErrorText>
            <ErrorButton onClick={HandleBackButtonClick}>Вернуться на главную</ErrorButton>
        </ErrorBlock>
    )
}
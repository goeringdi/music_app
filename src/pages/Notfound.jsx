import ErrorImg from "../img/smile_crying.png";
import React from 'react';
import { useNavigate } from "react-router-dom";
import {ErrorBlock, ErrorTitle, ErrorTextBox, ErrorSubtitle, ErrorSubtitleImage, ErrorText, ErrorButton } from '../styled/notFound.styled'

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
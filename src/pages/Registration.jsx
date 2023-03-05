import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
import {RegisterContainer, RegisterBlock, LogoImg, RegisterInput, RegisterButton } from '../styled/registration.styled';

export const Register = function() {

    const navigate = useNavigate();

    const handleRegisterButton = () => {
        navigate("/", {replace: true});
    };


    return (
        <RegisterContainer>
            <RegisterBlock >
                <LogoImg src={LogoBlack} alt='Logo'/>
                <RegisterInput placeholder='Логин'></RegisterInput>
                <RegisterInput placeholder='Пароль'></RegisterInput>
                <RegisterInput placeholder='Повторите пароль'></RegisterInput>
                <RegisterButton onClick={handleRegisterButton}>Зарегистрироваться</RegisterButton>
            </RegisterBlock>
        </RegisterContainer>
        
    )
}
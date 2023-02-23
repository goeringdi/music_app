import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
import styled from "styled-components";


export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;



export const RegisterBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 320px;
    align-content: center;
    align-items: center;
    width: 366px;
    height: 439px;
    background: #FFFFFF;
    border-radius: 12px;
`;

export const LogoImg = styled.img`
    width: 140px;
    height: 21px;
    margin-bottom: 45px;
    margin-top: 45px;
`;

export const RegisterInput = styled.input`
    width: 278.5px;
    height: 24px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #D0CECE;
    margin-bottom: 38px;
    padding: 16px;
    border-bottom: 1px solid #D0CECE;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    &::placeholder{
        font-family: 'StratosSkyeng';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.003em;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #D0CECE;
    }
`;


export const RegisterButton = styled.button`
    width: 278px;
    height: 52px;
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
    margin-top: 22px;
    margin-bottom: 20px;
    &:hover{
        background: #3F007D;
    }
    &:active{
        background: #271A58;
    }
`;


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
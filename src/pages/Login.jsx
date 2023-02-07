import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
import styled from "styled-components";


export const LoginBlock = styled.div`
    left: 900px;
    top: 370px;
    position: absolute;
    display: flex;
    flex-direction: column;
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

export const LoginInput = styled.input`
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


export const SignInButton = styled.button`
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
    margin-top: 7px;
    margin-bottom: 20px;
    &:hover{
        background: #3F007D;
    }
    &:active{
        background: #271A58;
    }
`;

export const RegisterButton = styled.button`
    padding: 16px;
    width: 278px;
    height: 52px;
    border: 1px solid #D0CECE;
    border-radius: 6px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
    background: #FFFFFF;
    &:hover{
        background: #F4F5F6;
    }
    &:active{
        background: #D9D9D9;
    }
`;

export const Login = function() {

    const navigate = useNavigate();
    const HandleSignInButton = () => {
        navigate("/main", {replace: true});
    };

    const HandleRegisterButton = () => {
        navigate("/register", {replace: true});
    };


    return (
        <LoginBlock >
            <LogoImg src={LogoBlack} alt='Logo'/>
            <LoginInput placeholder='Логин'></LoginInput>
            <LoginInput placeholder='Пароль'></LoginInput>
            <SignInButton onClick={HandleSignInButton}>Войти</SignInButton>
            <RegisterButton onClick={HandleRegisterButton}>Зарегистрироваться</RegisterButton>
        </LoginBlock>
    )
}
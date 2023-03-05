import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
import {RegisterContainer, RegisterBlock, LogoImg, RegisterInput, RegisterButton } from '../styled/registration.styled';
import { useUserSignupMutation } from '../api/musicApi';
import * as S from '../styled/registration.styled';
import { useState } from 'react';

export const Register = function() {

    const navigate = useNavigate();
    const [signup, { isSuccess, error }] = useUserSignupMutation()

    const [userValues, setUserValues] = useState({
        username: '',
        email: '',
        password: '',
    })

    const [validatePassword, setValidatePassword] = useState('')

    const onSignup = (e) => {
        e.preventDefault()

        if (userValues.password === validatePassword) {
            signup(userValues)
        } else {
            alert('Пароли не совпадают')
        }
        {isSuccess &&  navigate("/", {replace: true})}
    }

    const handleLoginChange = (e) => {
        setUserValues({
            ...userValues,
            username: e.target.value,
        })
    }

    const handleEmailChange = (e) => {
        setUserValues({
            ...userValues,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setUserValues({
            ...userValues,
            password: e.target.value,
        })
    }

    const handleValidatePasswordChange = (e) => {
        setValidatePassword(e.target.value)
    }

    return (
        <RegisterContainer>
            <RegisterBlock >
                <LogoImg src={LogoBlack} alt='Logo'/>
                <RegisterInput placeholder='Логин' type="text" onChange={handleLoginChange}></RegisterInput>
                {error && error.data.username && (
                        <S.ErrorNameMessage>
                            {error.data.username[0]}
                        </S.ErrorNameMessage>
                    )}
                <RegisterInput placeholder="Email" type="text" onChange={handleEmailChange}></RegisterInput>
                {error && error.data.email && (
                        <S.ErrorEmailMessage>
                            {error.data.email[0]}
                        </S.ErrorEmailMessage>
                    )}
                <RegisterInput placeholder='Пароль'  type="password" onChange={handlePasswordChange}></RegisterInput>
                {error && error.data.password && (
                        <S.ErrorPasswordMessage>
                            {error.data.password[0]}
                        </S.ErrorPasswordMessage>
                    )}
                <RegisterInput placeholder='Повторите пароль' type="password" onChange={handleValidatePasswordChange}></RegisterInput>
                <RegisterButton onClick={(e) => onSignup(e)}>Зарегистрироваться</RegisterButton>
            </RegisterBlock>
        </RegisterContainer>
        
    )
}
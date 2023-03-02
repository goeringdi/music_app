import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
import Cookies from 'js-cookie';
import {LoginContainer, LoginBlock, LogoImg, LoginInput, PassInput, SignInButton, RegisterButton } from '../styled/login.styled'



export const Login = function() {

    const navigate = useNavigate();
    
    const handleSignInButton = () => {
        const userLogin = textLogin;
        const userPass = textPass;
        console.log(userLogin)

        if (userLogin === '1234' && userPass === '1234') {
            Cookies.set('token', '1234');
            navigate("/main", {replace: true});

        } else {
            alert ('Неправильный логин или пароль');
            setTextLogin('');
            setTextPass('');
        }
    };

    const handleRegisterButton = () => {
        navigate("/register", {replace: true});
    };

    const [textLogin, setTextLogin] = useState('');
    const [textPass, setTextPass] = useState('');
 

    return (
        <LoginContainer>
            <LoginBlock >
                <LogoImg src={LogoBlack} alt='Logo'/>
                <LoginInput type="text" value={textLogin} onInput={(e) => setTextLogin(e.target.value)} placeholder='Логин'></LoginInput>
                <PassInput type="text" value={textPass} onInput={(e) => setTextPass(e.target.value)} placeholder='Пароль'></PassInput>
                <SignInButton onClick={handleSignInButton}>Войти</SignInButton>
                <RegisterButton onClick={handleRegisterButton}>Зарегистрироваться</RegisterButton>
            </LoginBlock>
        </LoginContainer>
        
    )
}
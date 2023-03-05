import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import LogoBlack from "../img/LogoBlack.png";
// import Cookies from 'js-cookie';
import {LoginContainer, LoginBlock, LogoImg, LoginInput, PassInput, RegisterButton } from '../styled/login.styled'
import LoginButton from '../components/LoginButton/LoginButton';



export const Login = function() {

    const navigate = useNavigate();
    

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
                <LoginButton/>
                <RegisterButton onClick={handleRegisterButton}>Зарегистрироваться</RegisterButton>
            </LoginBlock>
        </LoginContainer>
        
    )
}
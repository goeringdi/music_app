import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginBlock = styled.div`
    display: flex;
    margin-top: 320px;
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
    margin-bottom: 32px;
    margin-top: 38px;
`;

export const LoginInput = styled.input`
    width: 278.5px;
    height: 24px;
    font-family: "StratosSkyeng";
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
        font-family: "StratosSkyeng";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.003em;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #D0CECE;
    }
`;

export const PassInput = styled.input`
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

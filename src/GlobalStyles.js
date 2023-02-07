import { createGlobalStyle } from 'styled-components';c

export const GlobalStyle = createGlobalStyle`
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;

};
html {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &:before {
        box-sizing: border-box;
    }
    &:after {
        box-sizing: border-box;
    }
};
a {
    &:visited {
        text-decoration: none;
        font-family: 'StratosSkyeng', sans-serif;
        cursor: pointer;
    }
};
ul li {
    list-style: none;
};
`;


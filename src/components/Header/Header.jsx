import logo from '../../img/logo.png';
import React from 'react';
import {
  BurgerLine,
  LogoImage,
  MainNav,
  MenuItem,
  MenuLink,
  MenuList,
  NavBurger,
  NavLogo,
  NavMenu,
  ThemeDiv,
  ThemeSvg
} from './Header.styled';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../../context/theme';
import dark from '../../img/icon/dark.svg';
import light from '../../img/icon/light.svg';
import { themes } from '../../context/theme';


const { useState } = React
const Nav = function() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  const navigate = useNavigate();
  const HandleMainLink = () => {
      navigate("/main", {replace: true});
  };

  const HandleLogoClick = () => {
      navigate("/main", {replace: true});
  };

  const HandleMyTracks = () => {
    navigate("/mytracks", {replace: true});
  };

  const HandleSignOut = () => {
    navigate("/", {replace: true});
  };
    
  const { toggleTheme } = useThemeContext();


  return (
    <MainNav>
      <NavLogo>
        <LogoImage onClick={HandleLogoClick} src={logo} alt="logo" />
      </NavLogo>
      <NavBurger onClick={toggleVisibility} role="presentation">
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </NavBurger>
      {!visible && (
        <NavMenu>
          <MenuList>
            <MenuItem>
              <MenuLink onClick={HandleMainLink}>Главная</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={HandleMyTracks}>Мой плейлист</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={HandleSignOut}>Выйти</MenuLink>
            </MenuItem>
            {themes.dark && (
              <MenuItem>
                <ThemeDiv onClick={toggleTheme}>
                  <ThemeSvg src={dark} alt= "dark"/>
                </ThemeDiv>
              </MenuItem>
            )}
            <MenuItem>
                <ThemeDiv onClick={toggleTheme}>
                  <ThemeSvg src={light} alt= "light"/>
                </ThemeDiv>
              </MenuItem> 
          </MenuList>
        </NavMenu>
      )}
    </MainNav>
  )
}

export default Nav

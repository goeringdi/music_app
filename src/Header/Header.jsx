import logo from '../img/logo.png';
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
} from './Header.styled';
import { useNavigate } from "react-router-dom";


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
          </MenuList>
        </NavMenu>
      )}
    </MainNav>
  )
}

export default Nav

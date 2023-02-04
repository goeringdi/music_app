import logo from '../img/logo.png'
import React from 'react'
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
} from './Header.styled'

const { useState } = React
function Nav() {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <MainNav>
      <NavLogo>
        <LogoImage src={logo} alt="logo" />
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
              <MenuLink href="http://">Главное</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="http://">Мой плейлист</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="http://">Войти</MenuLink>
            </MenuItem>
          </MenuList>
        </NavMenu>
      )}
    </MainNav>
  )
}

export default Nav

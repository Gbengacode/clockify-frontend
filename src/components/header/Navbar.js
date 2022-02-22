import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  Icon,
} from '../../assets/navStyles/nav';

const Navbar = () => (
  <>
    <NavContainer>
      <Icon><FaBars /></Icon>
      <NavLogo to="/">Clockify</NavLogo>
      <Nav>
        <NavMenu>
          <NavItem>
            <NavLink to="/">User</NavLink>
            <NavLink to="/">EG</NavLink>
          </NavItem>
        </NavMenu>
        <MobileIcon>
          {/* <FaBars onClick={toggle} /> */}
        </MobileIcon>
      </Nav>
    </NavContainer>

  </>
);
export default Navbar;

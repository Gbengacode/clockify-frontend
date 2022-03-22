import styled from 'styled-components';

import { NavLink as LinkA } from 'react-router-dom';

export const NavContainer = styled.header`
    background: var(--white);
    box-shadow: rgba(100, 100, 139, 0.2) 0 7px 29px 0;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 100%;
`;

export const Nav = styled.nav`
    display: grid;
`;

export const NavLogo = styled(LinkA)`
   display: flex;
   margin-right: auto;
   padding-left: 20px;
   text-decoration: none;
   font-size: 1.5rem;
   color: var(--blue);


 
`;

export const MobileIcon = styled.div`
 
`;
export const NavMenu = styled.ul`
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
`;

export const NavItem = styled.li`
  
`;
export const NavLink = styled(LinkA)`
  padding: 20px;
  text-decoration: none;
  font-size: 1.0rem;
  color: #666;
  h3 hover { 
    text-decoration: underline;
  }
`;

export const Icon = styled.div`
margin-top: 5.5px;
color: var(--blue);
cursor: pointer;
`;

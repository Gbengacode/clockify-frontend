import styled from 'styled-components';
import { NavLink as LinkA } from 'react-router-dom';

export const Nav = styled.nav`
    background: var(--white);
    width: 20%;
    position: relative;

`;

export const NavMenu = styled.ul`
  position: absolute;
  top: 0;
  list-style-type: none;
  margin: 0;
  paddinig: 0;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction:column;
`;

export const NavLink = styled(LinkA)`
text-decoration: none;
color: var(--grey-4);
display: flex;
gap: 20px;
h3 {
  font-size: 1.0rem;
  font-weight: normal;
  color: var(--gray);

}
`;

export const Icon = styled.div`
margin-top: 15px;
font-size: 20px;`;

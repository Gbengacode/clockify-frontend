import React from 'react';
import {
  AiOutlineCalendar, AiOutlineClockCircle,
  AiOutlineDashboard, AiOutlineProject,
} from 'react-icons/ai';
import {
  Nav, NavMenu, NavItem, NavLink, Icon,
} from '../../assets/navStyles/side';

const Sidebar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLink to="/">

            <Icon>
              <AiOutlineCalendar />
            </Icon>

            <h3>TIME SHEET</h3>

          </NavLink>
          <NavLink to="/">
            <Icon>
              <AiOutlineClockCircle />
            </Icon>

            <h3>IME TARKER</h3>
          </NavLink>

          <NavLink to="/">
            <Icon>
              <AiOutlineDashboard />
            </Icon>
            <h3>DASHBOARD</h3>
          </NavLink>

          <NavLink to="/project">
            <Icon>
              <AiOutlineProject />
            </Icon>
            <h3>PROJECT</h3>
          </NavLink>
        </NavItem>
      </NavMenu>
      :

    </Nav>
  </>
);

export default Sidebar;

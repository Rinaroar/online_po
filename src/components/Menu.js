import React from 'react';
import { bool } from 'prop-types';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import { MAX } from "../constants";

export const StyledMenu = styled.nav`
  display: none;
  background-image: linear-gradient(to top, #680270, #720171, #7c0071, #850071, #8e0071, #950072, #9c0173, #a30274, #a90277, #b0027b, #b6017e, #bd0181);
  height: 100%;
  text-align: left;
/*   padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  ${MAX.MEDIA_XS} {
    width: 100%;
    display: flex;
  }
`;

const List = styled.ul`
  font-size: 1.6rem;
  list-style-type: none;
`

const Cell = styled.li`
  margin:40px;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      font-weight: 700;
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
       <List>
          <Cell><Link to="/">Home</Link></Cell>
          <Cell><Link to="/about">About</Link></Cell>
          <Cell><Link to="/experiences">Experiences</Link></Cell>
          <Cell><Link to="/skills">Skills</Link></Cell>
          <Cell><Link to="/projects">Projects</Link></Cell>
          <Cell><Link to="/hobby">Hobby</Link></Cell>
          <Cell><Link to="/contact">Contact</Link></Cell>
        </List>
    </StyledMenu>
  )
}

  Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;
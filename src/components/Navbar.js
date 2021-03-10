import React  from 'react';
import styled from 'styled-components';
import { MAX } from "../constants";

import { Link } from "react-router-dom";

const Navigation = styled.nav`
  padding:60px 30px 0px 30px ;
  flex: 1.5;
  background-color: #CC7D20;
  display: block;

  ${MAX.MEDIA_M} {
    padding: 30% 2% 25% 2%;
  }

  ${MAX.MEDIA_S} {
    padding: 25% 2% 25% 2%;
  }

  ${MAX.MEDIA_XS} {
   display: none;
  }
`
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

const Navbar = () => {
  return (
      <Navigation>
        <List>
          <Cell><Link to="/">Home</Link></Cell>
          <Cell><Link to="/about">About</Link></Cell>
          <Cell><Link to="/experiences">Experiences</Link></Cell>
          <Cell><Link to="/skills">Skills</Link></Cell>
          <Cell><Link to="/projects">Projects</Link></Cell>
          <Cell><Link to="/hobby">Hobby</Link></Cell>
          <Cell><Link to="/contact">Contact</Link></Cell>
        </List>
      </Navigation>
    )
  }

export default Navbar;

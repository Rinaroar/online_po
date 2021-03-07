import React from 'react';
import styled from 'styled-components';
import { MAX } from "../constants";

import Card from '../components/Card';

const Project = styled.div`
  padding: 90px;
  background-color: #eee;
  flex: 6;

  ${MAX.MEDIA_M}{
    padding: 10% 45px 90px 45px;
  }

  ${MAX.MEDIA_XS} {
    padding: 20% 10px 20px 25px;
  }
`

const Subtopic = styled.h1`

  ${MAX.MEDIA_XS} {
    font-size: 1.5rem;
  }
`

const Projects = () => (
  <Project>
    <Subtopic>What did I do until now ?</Subtopic>
    <Card />
  </Project>
);

export default Projects
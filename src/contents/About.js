import React from 'react';
import styled from 'styled-components';
import Resume from '../components/Resume';

import { MAX } from "../constants";

const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;

  ${MAX.MEDIA_M}{
    padding: 20% 50px 30px 50px;
  }

  ${MAX.MEDIA_XS}{
    padding: 20% 10px 20px 25px;
  }
`

const Title = styled.h1`
  margin:10px 10px 30px 0px !important;

  ${MAX.MEDIA_XS} {
    font-size: 1.5rem;
  }
`

const AboutMe = styled.h2`
  color: #CC7D20;

  ${MAX.MEDIA_XS} {
    font-size: 1.2rem;
  }
`

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <p>Hey there,</p>
      <br></br>
      <AboutMe>I'm Marina Luxin <br></br>Happy Product Owner</AboutMe>
      <br></br>
        <p>I started my journey in Digital World from an young age designing, editing and creating stuff on Web.
          I did my studies in Paris beginning with a HND in communication and a Bachelor Degree in Digital Marketing.
          <br/>
          I continued with a <strong>Master Degree in Web Developement</strong> at ECV Digital Paris, to improve my technical skill doing front-end development.
          <br/>
          <br/>Now I’m about to finish my <strong>Art Director Degree specialized in Digital Startagy</strong>.
          <br/>Digital culture is one of my center of interest, such as design and sport : fields where there is always something new to learn!
          <br/>
          <br/>Most of all I like to share and pass on my knowledge with the other.
        </p>
      <Resume/>
    </Container>
  )
}

export default About
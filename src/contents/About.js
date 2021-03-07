import React from 'react';
import styled from 'styled-components';

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
  color: rgb(189, 1, 129);

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
      <AboutMe>I'm Marina Luxin <br></br>Happy Apprentice Fullstack Web <u>Developer</u></AboutMe>
      <br></br>
        <p>I started my journey in Digital World from an young age designing, editing and creating stuff on Web.
          I did my studies in Paris beginning with a HND in communication and a Bachelor Degree in Digital Marketing.
          <br/>
          <br/>Now I’m 23 years old and I am pursuing my Art Director Degree specialized in Web Developement at ECV Digital Paris.
          Web development is one of my center of interest, such as Design and Yoga : fields where there is always something new to learn!
          <br/>
          <br/>Most of all I like to share and pass on my knowledge with the other through chat, classes or social media.
        </p>
    </Container>
  )
}

export default About
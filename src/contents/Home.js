import React from 'react';
import styled from 'styled-components';

import  profilePic from '../img/pinkprofile.png';
import Social from '../components/Social';
import { MAX } from "../constants";

const Container = styled.div`
  padding: 90px;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${MAX.MEDIA_M}{
    padding: 0px 45px 90px 45px;
  }

  ${MAX.MEDIA_XS} {
    padding: 0;
  }
`
const Profile = styled.img`
  width: 350px;
  margin-bottom: 20px;

  ${MAX.MEDIA_M}{
      margin-bottom: 45px;
  }

  ${MAX.MEDIA_S} {
    margin-bottom: 10px;
  }

  ${MAX.MEDIA_XS} {
    border-radius: 0%;
    width: 330px;
  }
`
const Section= styled.div`
  text-align: center;
  margin-bottom: 80px;

  ${MAX.MEDIA_M}{
    margin-bottom: 0px;
  }

  ${MAX.MEDIA_XS} {
    margin: 0 10px 45px 28px;
    text-align: left;
  }
`
const Hi = styled.p`
`
const Text = styled.p`
  font-weight: 500;

  ${MAX.MEDIA_M}{
    font-size: 1rem;
  }
`
const Name = styled.h1`
  color: #720171;
`
const Emoji = styled.i`
  font-size: 30px;
`
const Jump = styled.span`
  display: initial;

  ${MAX.MEDIA_XS} {
    display: none;
  }
`

const Home = () => {
    return (
      <Container>
        <Profile src={profilePic} alt="My face"></Profile>
          <Section>
            <Hi>
              <span role="img" aria-label="hihand"><Emoji>&#128075;&#127997;</Emoji></span>
              Hi there! My name is
            </Hi>
            <Name>Marina Luxin</Name>
            <Text>I am software developer based in Paris, France <Jump><br></br></Jump>focused on learning and building creatives applications</Text>
          </Section>
        <Social />
      </Container>
    )
}
export default Home
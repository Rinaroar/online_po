import React from 'react';
import styled from 'styled-components';

/* import yoga from '../img/exercise.png'; */
import hobbies from '../img/hobbies.png'
import { MAX } from "../constants";

const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${MAX.MEDIA_M}{
    padding: 4% 40px 90px 40px;
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

const Hobbies = styled.img`
  margin-bottom: 45px;
  width: 400px;

  ${MAX.MEDIA_XS}{
    width: 100%;
    margin-bottom: 25px;
  }
`
const Text = styled.p`
  ${MAX.MEDIA_XS}{
  width: 80%;
  text-align: center;
  }
`

const Contact = () => {
    return (
      <Container>
        <Title>What do I do after work ?</Title>
        <Hobbies src={hobbies} alt="hobbies"></Hobbies>
        <Text>Books and flowers, my dog, sport, drawing and many more!</Text>
      </Container >
    )
}

export default Contact
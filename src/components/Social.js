import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  position: absolute;
  margin-top: 20px;
  display: flex;
  bottom: 20px;
`

const Network = styled.a`
  padding-right: 20px;
  font-size: 25px;
  color: #CC7D20;

  &:hover {
    color: #4F4F4F;
  }
`

const Social = () => {
  return (
    <SocialContainer>
      <Network href="https://github.com/Rinaroar" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </Network>
      <Network href="https://www.linkedin.com/in/marina-luxin-661b38116/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </Network>
    </SocialContainer>
  )
}

export default Social
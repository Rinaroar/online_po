import React, { useState } from 'react';
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
const Section = styled.section`
  display: inline-flex;
  margin-top: 15px;

  ${MAX.MEDIA_M} {
    display: block;
  }
  ${MAX.MEDIA_XS} {
    display: block;
  }
`

const List = styled.ul`
  margin: 0 90px 0 0;

  ${MAX.MEDIA_M}{
    margin: 0 60px 0 0;
  }

  ${MAX.MEDIA_XS}{
    margin-bottom: 15px;
  }

`
const SkillTitle = styled.h2`
  color: #CC7D20;

  ${MAX.MEDIA_M}{
    margin-top: 10%;
  }

  ${MAX.MEDIA_XS} {
    font-size: 1.4rem;
  }
`
const Cell = styled.li`
  list-style-type:none;
  margin: 10px 10px 10px 0;
  font-size: 1.2rem;

  ${MAX.MEDIA_XS} {
    margin: 0;
    line-height: 2rem;
  }

`

function SkillsView() {
  const [items] = useState([
    {
      title: "Product Management",
      skillTheme: ['Jira / GitLab','Confluence','Didomi','Agile rituals','Workshop']
    },
    {
      title: "Web Development",
      skillTheme: ['HTML/CSS','Accessibility','Javascript','PHP/SQL']
    },
    {
      title: "UX/UI",
      skillTheme: ["Adobe","Figma", "UX Method"]
    },
    {
      title: "Strengths",
      skillTheme: ["Creative","Team work", "Proactive", "Initiatives taker"]
    }
  ])

  return (
    <Container>
      <Title>I could help you with...</Title>
      <Section>
        {items.map(value =>
          <List>
            <SkillTitle>{value.title}</SkillTitle>
              {value.skillTheme &&
              value.skillTheme.map(skill => (
                <Cell key={skill.skillTheme}>{skill}</Cell>
              ))}
          </List>
          )}
      </Section>
      <Resume/>
    </Container>
  )
}

export default SkillsView;
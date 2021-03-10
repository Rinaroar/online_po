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

const Widecard = styled.div`
  display: flex;
  margin:30px 0px 30px 0px;
  width: 80%;
`
const WidecardContent = styled.div`
  margin-bottom: 20px;
`

const ExpeTitle = styled.h2`
  color: #CC7D20;

  ${MAX.MEDIA_XS} {
    font-size: 1.2rem;
  }
`

const From = styled.p``

const Where = styled.p``

const During = styled.p`
  font-style: italic;
  font-size: 1rem;
  margin-top: 5px;
`

function Expe() {
  const [data] = useState([

    {
      title: "Product Owner",
      where: "Lagadère Media News | Paris",
      from: "2021",
      to: "Now",
      during: "Sandwich course in Master Degree"
    },
    {
      title: "Front-End Developer",
      where: "SeLoger | Paris",
      from: "2019",
      to: "2020",
      during: "Sandwich course in Master Degree"
    },
    {
      title: "Webdesigner | Knowledge Management Assistant",
      where: "Société Générale | Paris" ,
      from: "2018" ,
      to: "2019",
      during: "Sandwich course in Bachelor Degree"
    },
    {
      title: "Communication Assistant",
      where: "EDF | Paris",
      from: "2016",
      to: "2018",
      during: "Sandwich course in HND"
    }
  ])

  return (
    <Container>
      <Title>You can ask them</Title>
        <Widecard>
          <div>
            {data.map(value =>
              <WidecardContent key={value.title}>
                  <ExpeTitle>{value.title}</ExpeTitle>
                  <From>{value.from} - {value.to}</From>
                  <Where>{value.where}</Where>
                  <During>{value.during}</During>
              </WidecardContent>
            )}
          </div>
        </Widecard>
      <Resume/>
    </Container>
  )
}

export default Expe;

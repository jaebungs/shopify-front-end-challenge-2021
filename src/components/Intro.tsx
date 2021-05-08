import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  font-size: 1.6rem;
  margin: 10rem auto 2rem auto;
  min-width: 70rem;
`;

const H1 = styled.h1`
  font-size: 3.2rem;
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const Span = styled.span`
  font-weight: normal;
`;


const Intro = () => {
    return (
        <Section>
             <H1>
          <Span>Welcome to</Span> Shoppies!
        </H1>
        <H2>You can nomitate 5 movies.</H2>
        <p>Increase the chance to win awards for your favorite movies!</p>
        </Section>
    )
}

export default Intro

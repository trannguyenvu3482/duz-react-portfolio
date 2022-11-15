import React, { useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import BackendSkills from './BackendSkills';
import FrontendSkills from './FrontendSkills';

const Skills = () => {
  return (
    <Slide triggerOnce>
      <Wrapper className="section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <Container className="container grid">
          <FrontendSkills />
          <BackendSkills />
        </Container>
      </Wrapper>
    </Slide>
  );
};

const Wrapper = styled.section``;

const Container = styled.div`
  grid-template-columns: repeat(2, 350px);
  column-gap: 3rem;
  justify-content: center;

  @media screen and (max-width: 992px) {
    grid-template-columns: max-content;
    row-gap: 2rem;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default Skills;

import {
  UilAward,
  UilFileDownloadAlt,
  UilScenery,
  UilSuitcase,
} from '@iconscout/react-unicons';
import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/about.jpg';
import CV from '../assets/John-Cv.pdf';
const About = () => {
  return (
    <Wrapper className="section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <Container className="container grid">
        <img src={AboutImg} alt="about-image" />

        <AboutData>
          <Info className="grid">
            <InfoBox>
              <UilAward className="about-icon" />
              <h3 className="about-title">Experience</h3>
              <span className="about-subtitle">1+ Year Studying</span>
            </InfoBox>
            <InfoBox>
              <UilScenery className="about-icon" />
              <h3 className="about-title">Completed</h3>
              <span className="about-subtitle">10+ Projects</span>
            </InfoBox>
            <InfoBox>
              <UilSuitcase className="about-icon" />
              <h3 className="about-title">Status</h3>
              <span className="about-subtitle">Available For Work</span>
            </InfoBox>
          </Info>

          <p className="about-description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a href={CV} className="button button--flex">
            Download my CV
            <UilFileDownloadAlt />
          </a>
        </AboutData>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 4rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }

  img {
    width: 350px;
    border-radius: 1.5rem;
    justify-self: center;

    @media screen and (max-width: 992px) {
      width: 220px;
    }
  }
`;

const AboutData = styled.div`
  .about-description {
    padding: 0 4rem 0 0;
    margin-bottom: var(--mb-2-5);

    @media screen and (max-width: 992px) {
      padding: 0 5rem;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
  }

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

const Info = styled.div`
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: var(--mb-2);

  @media screen and (max-width: 992px) {
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoBox = styled.div`
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;

  .about-icon {
    font-size: 1rem;
    color: var(--title-color);
    margin-bottom: var(--mb-0.5);
  }

  .about-title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .about-subtitle {
    font-size: var(--tiny-font-size);
  }

  @media screen and (max-width: 992px) {
    padding: 0.75rem 0.5rem;
  }
`;

export default About;

import {
  UilArrowDown,
  UilFacebook,
  UilGithub,
  UilLinkedin,
  UilMessage,
} from '@iconscout/react-unicons';
import { UisCheckCircle } from '@iconscout/react-unicons-solid';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import HandSVG from '../assets/hand.svg';
import ProfileImage from '../assets/profile.jpg';
import ScrollSVG from '../assets/scroll.svg';
const Home = () => {
  return (
    <Wrapper id="home">
      <Container className="container grid">
        <Content className="grid">
          <Socials>
            <SocialLink target="_blank" href="https://facebook.com/DuzFromSOL">
              <UilFacebook className="link-icon" />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://github.com/trannguyenvu3482"
            >
              <UilGithub className="link-icon" />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://linkedin.com/in/trannguyenvu3482"
            >
              <UilLinkedin className="link-icon" />
            </SocialLink>
          </Socials>

          <HomeImage></HomeImage>

          <Data>
            <h1 className="title">
              <ReactTypingEffect
                text={['Vu Tran']}
                speed={200}
                typingDelay={600}
                cursorRenderer={(cursor) => (
                  <h4 style={{ color: '#666' }}>{cursor}</h4>
                )}
              />
              <UisCheckCircle className="hand-img" />
            </h1>
            <h3 className="subtitle">Frontend Developer</h3>
            <p className="description">
              I'm a frontend developer in Ho Chi Minh City, VN and I'm very
              passionate and dedicated to my work. I love to learn and grow my
              skillset.
            </p>

            <a href="#contact" className="button button--flex">
              Contact me
              <UilMessage size="20" className="contact-btn-icon" />
            </a>
          </Data>
        </Content>

        <ScrollDown>
          <img src={ScrollSVG} alt="scroll button" />
          <span>Scroll Down</span>
          <UilArrowDown className="scroll-arrow" />
        </ScrollDown>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Container = styled.div``;

const Content = styled.div`
  grid-template-columns: 116px repeat(2, 1fr);
  padding-top: 5.5rem;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: 100px repeat(2, 1fr);
    column-gap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
  }
`;

const Socials = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

const SocialLink = styled.a`
  font-size: 1.25rem;
  color: var(--title-color);
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    color: var(--title-color-dark);
    opacity: 1;
  }
`;

const HomeImage = styled.div`
  background: url(${ProfileImage}) no-repeat center center / cover;
  box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
  width: 300px;
  height: 300px;
  order: 1;
  justify-self: center;
  animation: profile-animate 8s ease-in-out infinite 1s;

  @media screen and (max-width: 992px) {
    width: 250px;
    height: 250px;
    box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
  }

  @media screen and (max-width: 768px) {
    order: initial;
    justify-self: initial;
    box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 320px) {
    width: 180px;
    height: 180px;
  }

  @keyframes profile-animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

const Data = styled.div`
  .title {
    font-size: var(--big-font-size);
    margin-bottom: var(--mb-0-25);
  }

  .contact-btn-icon {
    margin-left: 5px;
  }

  .hand-img {
    width: 38px;
    height: 38px;
    margin-left: 1rem;
    color: #1da1f2;

    @media screen and (max-width: 992px) {
      width: 26px;
      height: 26px;
    }

    @media screen and (max-width: 320px) {
      width: 22px;
      height: 22px;
    }
  }

  .subtitle {
    position: relative;
    font-size: var(--h3-font-size);
    padding-left: 5.4rem;
    font-weight: var(--font-normal);
    margin-bottom: var(--mb-1);

    @media screen and (max-width: 992px) {
      padding-left: 3.75rem;
      margin-bottom: var(--mb-0-5);
    }

    &::before {
      content: '';
      position: absolute;
      width: 70px;
      height: 1px;
      background-color: var(--text-color);
      left: 0;
      top: 1rem;

      @media screen and (max-width: 992px) {
        width: 42px;
        top: 0.8rem;
      }
    }
  }

  .description {
    max-width: 400px;
    margin-bottom: var(--mb-2);

    @media screen and (max-width: 992px) {
      max-width: initial;
      margin-bottom: var(--mb-1-5);
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const ScrollDown = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9.25rem;

  cursor: pointer;

  @media screen and (max-width: 992px) {
    margin-left: 7.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    &:hover {
      animation: scroll 3s ease infinite;
    }

    @keyframes scroll {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(15px);
      }

      100% {
        transform: translateY(0);
      }
    }
  }

  span {
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
    margin-left: 2px;
  }

  .scroll-arrow {
    font-size: 1.25rem;
    color: var(--title-color);
  }
`;

export default Home;

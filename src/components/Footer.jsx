import { UilFacebook, UilGithub, UilLinkedin } from '@iconscout/react-unicons';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Container className="container">
        <h1 className="footer-title">Vu Tran</h1>

        <List>
          <ListItem>
            <a href="#about" className="footer-link"></a>
          </ListItem>
          <ListItem>
            <a href="#portfolio" className="footer-link"></a>
          </ListItem>
          <ListItem>
            <a href="#skills" className="footer-link"></a>
          </ListItem>
          <ListItem>
            <a href="#" className="footer-link"></a>
          </ListItem>
        </List>

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

        <span className="copyright">&#169; Vu Tran. All rigths reserved</span>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 2rem 0 6rem;

  .footer-title,
  .footer-link {
    color: var(--title-color);
  }

  .footer-title {
    text-align: center;
    margin-bottom: var(--mb-2);
  }

  .copyright {
    display: block;
    margin-top: 4.5rem;
    color: var(--title-color);
    text-align: center;
    font-size: var(--smaller-font-size);
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: var(--mb-2);
`;

const ListItem = styled.li`
  .footer-link {
    &:hover {
      color: var(--title-color-dark);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
`;

const SocialLink = styled.a`
  background-color: var(--title-color);
  color: var(--container-color);
  font-size: 1.25rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
  display: inline-flex;

  &:hover {
    background-color: var(--title-color-dark);
  }

  @media screen and (max-width: 992px) {
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`;

export default Footer;

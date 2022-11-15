import { UilArrowUp } from '@iconscout/react-unicons';
import React from 'react';
import styled from 'styled-components';

const ScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 560) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <Scroll show={show} href="#" className="scroll-to-top">
      <UilArrowUp className="scroll-icon" />
    </Scroll>
  );
};

const Scroll = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: ${({ show }) => {
    return show ? '2.5rem' : '-20%';
  }};
  background-color: var(--title-color);
  opacity: 0.8;
  padding: 0.3rem 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  z-index: var(--z-tooltip);
  transition: 0.4s ease all;
  display: flex;
  align-items: center;
  justify-content: center;

  .scroll-icon {
    font-size: 1.5rem;
    color: var(--container-color);
  }

  &:hover {
    opacity: 1;
    transform: translateY(-0.5rem);
  }

  @media screen and (max-width: 992px) {
    right: 1.5rem;
    padding: 0.25rem 0.4rem;

    .scroll-icon {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    bottom: ${({ show }) => {
      return show ? '6rem' : '-20%';
    }};
  }

  @media screen and (max-width: 350px) {
    right: 1rem;
  }
`;

export default ScrollToTop;

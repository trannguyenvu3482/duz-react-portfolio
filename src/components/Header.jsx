import {
  UilApps,
  UilEstate,
  UilFileAlt,
  UilMessage,
  UilScenery,
  UilSuitcase,
  UilTimes,
  UilUser,
} from '@iconscout/react-unicons';
import { useState } from 'react';
import styled from 'styled-components';

const Header = ({ props }) => {
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState(true);
  const [activeNav, setActiveNav] = useState('#home');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  });

  const observerFunc = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(`#${entry.target.id}`);
      }
    });
  };

  const observer = new IntersectionObserver(observerFunc, {
    root: null,
    threshold: 0.2,
  });

  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    observer.observe(section);
  });

  return (
    <Wrapper active={header}>
      <Container>
        <Logo href="#">Vu Tran</Logo>

        <Menu active={toggle}>
          <MenuList>
            <MenuItem>
              <MenuLink
                href="#home"
                active={activeNav === '#home'}
                onClick={() => setActiveNav('#home')}
              >
                <UilEstate className="link-icon" />
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="#about"
                active={activeNav === '#about'}
                onClick={() => setActiveNav('#about')}
              >
                <UilUser />
                About
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="#skills"
                active={activeNav === '#skills'}
                onClick={() => setActiveNav('#skills')}
              >
                <UilFileAlt />
                Skills
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="#experience"
                active={activeNav === '#experience'}
                onClick={() => setActiveNav('#experience')}
              >
                <UilSuitcase />
                Experience
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="#portfolio"
                active={activeNav === '#portfolio'}
                onClick={() => setActiveNav('#portfolio')}
              >
                <UilScenery />
                Portfolio
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                href="#contact"
                active={activeNav === '#contact'}
                onClick={() => setActiveNav('#contact')}
              >
                <UilMessage />
                Contact
              </MenuLink>
            </MenuItem>
          </MenuList>

          <CloseBtn onClick={() => setToggle(false)} />
        </Menu>

        <MenuToggle onClick={() => setToggle(true)}>
          <UilApps />
        </MenuToggle>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: ${({ active }) =>
    active ? 'none' : '0 0 10px rgba(0, 0, 0, 0.1)'};

  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;
  }
`;

const Container = styled.nav`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: 992px) {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  @media screen and (max-width: 350px) {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
`;

const Logo = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
`;

const Menu = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: ${(props) => (props.active ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }

  @media screen and (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  column-gap: 2rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 350px) {
    column-gap: 0;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: ${({ active }) =>
    active ? 'var(--title-color-dark)' : 'var(--title-color)'};
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  font-weight: var(--font-medium);
  transition: 0.3s;

  &:hover {
    opacity: 1;
    color: var(--title-color-dark);
  }

  .link-icon {
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const CloseBtn = styled(UilTimes)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1.5rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--title-color);

    &:hover {
      color: var(--title-color-dark);
    }
  }
`;

const MenuToggle = styled.div`
  color: var(--title-color);
  font-weight: var(--font-medium);
  display: none;
  font-size: 1.1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Header;

import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import styled from 'styled-components';
import { projectsData, projectsNav } from '../data/projectsData';

const Portfolio = () => {
  const [category, setCategory] = useState('html');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const newProjects = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newProjects);
  }, [category]);

  const handleFilterChange = (category) => {
    setCategory(category);
  };

  const handleNavigation = (link) => {
    window.open(link);
  };

  return (
    <Bounce triggerOnce>
      <Wrapper className="section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>
        <Container>
          <Filters>
            {projectsNav.map((item, index) => {
              return (
                <FilterButton
                  active={category === item.title}
                  key={index}
                  onClick={() => handleFilterChange(item.title)}
                >
                  {item.name}
                </FilterButton>
              );
            })}
          </Filters>
          <Content className="container grid">
            {projects.map((item, index) => {
              return (
                <WorkItem
                  key={item.id}
                  onClick={() => handleNavigation(item.link)}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <a target="_blank" href={item.link}>
                    Demo <box-icon name="right-arrow-alt"></box-icon>
                  </a>
                </WorkItem>
              );
            })}
          </Content>
        </Container>
      </Wrapper>
    </Bounce>
  );
};

const Wrapper = styled.section``;

const Container = styled.div``;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: var(--mb-2);

  @media screen and (max-width: 350px) {
    column-gap: 0.25rem;
  }
`;

const FilterButton = styled.span`
  cursor: pointer;
  color: ${({ active }) => (active ? '#fff' : 'var(--title-color)')};
  padding: 0.25rem 0.75rem;
  font-weight: var(--font-medium);
  background-color: ${({ active }) =>
    active ? 'var(--title-color)' : 'transparent'};

  border-radius: 0.5rem;
  text-transform: capitalize;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--title-color);
    color: var(--container-color);
  }
`;

const Content = styled.div`
  grid-template-columns: repeat(3, max-content);
  gap: 3rem;
  justify-content: center;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, max-content);
    gap: 1.25rem;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const WorkItem = styled.div`
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);

    img {
      transform: scale(1.24);
      border-radius: 0;
    }
  }

  img {
    width: 295px;
    border-radius: 1rem;
    margin-bottom: var(--mb-1);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.13);
    object-fit: cover;

    @media screen and (max-width: 992px) {
      margin-bottom: 0.75rem;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }

  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);

    @media screen and (max-width: 992px) {
      margin-bottom: 0.25rem;
    }
  }

  box-icon {
    font-size: 1rem;
    transition: 0.3s;
  }

  a {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    transition: 0.3s;

    &:hover {
      color: black;
    }

    &:hover > box-icon {
      transform: translateX(0.25rem);
    }
  }

  @media screen and (max-width: 992px) {
    padding: 1rem;
  }

  @media screen and (max-width: 350px) {
    font-size: var(--small-font-size);
  }
`;

export default Portfolio;

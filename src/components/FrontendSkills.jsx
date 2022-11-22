import { UilCheckCircle } from '@iconscout/react-unicons';
import React from 'react';
import styled from 'styled-components';

const FrontendSkills = () => {
  return (
    <Content>
      <h3 className="skill-title">Frontend Developer</h3>
      <Box>
        <SkillGroup>
          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">HTML</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </SkillData>

          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">CSS</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </SkillData>

          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">JavaScript</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </SkillData>

          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">Git</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </SkillData>

          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">React</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </SkillData>

          <SkillData>
            <UilCheckCircle className="check-icon" />

            <div className="skill-info">
              <h3 className="skill-name">Redux</h3>
              <span className="skill-level">Basic</span>
            </div>
          </SkillData>
        </SkillGroup>
      </Box>
    </Content>
  );
};

const Content = styled.div`
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;
  border-radius: 1.25rem;

  .skill-title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    text-align: center;
    margin-bottom: var(--mb-1-5);
  }

  @media screen and (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;

  @media screen and (max-width: 350px) {
    column-gap: 1.25rem;
  }
`;

const SkillGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 1rem;
`;

const SkillData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  .check-icon {
    width: 1rem;
    color: var(--text-color);
    margin-top: -3px;
  }

  .skill-info {
    .skill-name {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      line-height: 18px;

      @media screen and (max-width: 350px) {
        font-size: var(--small-font-size);
      }
    }

    .skill-level {
      font-size: var(--tiny-font-size);
    }
  }
`;

export default FrontendSkills;

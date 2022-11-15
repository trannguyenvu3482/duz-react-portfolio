import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Wrapper className="section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>

      <Container className="container">
        <Tabs>
          <TabButton
            active={activeTab === 0}
            className="button--flex"
            onClick={() => setActiveTab(0)}
          >
            <box-icon name="graduation" type="solid"></box-icon>
            Education
          </TabButton>
          <TabButton
            active={activeTab === 1}
            className="button--flex"
            onClick={() => setActiveTab(1)}
          >
            <box-icon name="briefcase" type="solid"></box-icon>
            Experience
          </TabButton>
        </Tabs>

        <Qualifications>
          <Content active={activeTab === 0}>
            <Slide triggerOnce cascade>
              <Data>
                <Info>
                  <h3 className="title">Frontend Developer</h3>
                  <span className="subtitle">
                    Fullstack Technology Education JSC
                  </span>
                  <div className="calendar">
                    <box-icon name="calendar" type="solid"></box-icon>
                    2021-Present
                  </div>
                </Info>

                <div>
                  <span className="rounder"></span>
                  <div className="line"></div>
                </div>
              </Data>

              <Data>
                <div></div>
                <div>
                  <span className="rounder"></span>
                  <div className="line"></div>
                </div>
                <Info>
                  <h3 className="title">Backend Developer</h3>
                  <span className="subtitle">
                    Fullstack Technology Education JSC
                  </span>
                  <div className="calendar">
                    <box-icon name="calendar" type="solid"></box-icon>
                    2022-Present
                  </div>
                </Info>
              </Data>

              <Data>
                <Info>
                  <h3 className="title">Software Engineering</h3>
                  <span className="subtitle">
                    Industrial University of HCMC
                  </span>
                  <div className="calendar">
                    <box-icon name="calendar" type="solid"></box-icon>
                    2021-Present
                  </div>
                </Info>

                <div>
                  <span className="rounder"></span>
                  <div className="line"></div>
                </div>
              </Data>
            </Slide>
          </Content>
          <Content active={activeTab === 1}>
            <Data>
              <Info>
                <h3 className="title">Student</h3>
                <span className="subtitle">Industrial University of HCMC</span>
                <div className="calendar">
                  <box-icon name="calendar" type="solid"></box-icon>
                  2021-Present
                </div>
              </Info>

              <div className="middle">
                <span className="rounder"></span>
                <div className="line"></div>
              </div>
            </Data>
          </Content>
        </Qualifications>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 768px;

  @media screen and (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--mb-2);
`;

const TabButton = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--title-color);
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  margin: 0 var(--mb-1);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--title-color-dark);
  }

  @media screen and (max-width: 576px) {
    margin: 0 var(--mb-0-75);
  }
`;

const Qualifications = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;

  @media screen and (max-width: 576px) {
    grid-template-columns: initial;
  }
`;

const Content = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  .rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background: var(--text-color);
    border-radius: 50%;
  }

  .line {
    display: block;
    width: 1px;
    height: 100%;
    background: var(--text-color);
    transform: translate(6px, -7px);
  }

  @media screen and (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const Info = styled.div`
  .title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .subtitle {
    display: inline-block;
  }

  .calendar {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--small-font-size);
  }
`;

export default Experience;

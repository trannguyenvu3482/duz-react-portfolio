import React from 'react';
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper className="section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">
        Contact me for more information!
      </span>
      <Container className="container grid">
        <h1>Contact page</h1>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Container = styled.div``;

export default Contact;

import emailjs from '@emailjs/browser';
import { UilMessage } from '@iconscout/react-unicons';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5ot41lt',
      'template_kp12e2k',
      form.current,
      'QUPvdbOgZObzr2cZS'
    );

    e.target.reset();
  };

  return (
    <Wrapper className="section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">
        Contact me for more information!
      </span>

      <Container className="container grid">
        <Content>
          <h3 className="title">Talk to me</h3>

          <Info>
            <Card>
              <box-icon name="envelope" type="solid"></box-icon>
              <h3 className="card-title">Email</h3>
              <span className="card-data">trannguyenvu3482@gmail.com</span>
              <a
                href="mailto:trannguyenvu3482@gmail.com"
                className="contact-btn"
              >
                Email me <box-icon name="right-arrow-alt"></box-icon>
              </a>
            </Card>

            <Card>
              <box-icon name="phone-call" type="solid"></box-icon>
              <h3 className="card-title">Phone No</h3>
              <span className="card-data">(+84) 903252508</span>
              <a href="tel:+84903252508" className="contact-btn">
                Call me <box-icon name="right-arrow-alt"></box-icon>
              </a>
            </Card>

            <Card>
              <box-icon name="messenger" type="logo"></box-icon>
              <h3 className="card-title">Messenger</h3>
              <span className="card-data">https://m.me/DuzFromSOL</span>
              <a
                target="_blank"
                href="https://m.me/DuzFromSOL"
                className="contact-btn"
              >
                Text me <box-icon name="right-arrow-alt"></box-icon>
              </a>
            </Card>
          </Info>
        </Content>

        <Content>
          <h3 className="title">Send me a message!</h3>

          <Form ref={form} onSubmit={sendEmail}>
            <div className="form-field">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your email"
              />
            </div>
            <div className="form-field form-textarea">
              <label className="form-label">Your message</label>
              <textarea
                name="message"
                className="form-input"
                cols="30"
                rows="10"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              href="#contact"
              type="submit"
              className="button button--flex"
            >
              Send message
              <UilMessage size="20" className="contact-btn-icon" />
            </button>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Container = styled.div`
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  column-gap: 6rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 992px) {
    column-gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;

const Content = styled.div`
  .title {
    text-align: center;
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
  }
`;

const Info = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: 300px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > box-icon {
    font-size: 2rem;
    color: var(--title-color);

    margin-bottom: var(--mb-1);
  }

  .card-title {
    font-size: var(--medium-font-size);
  }

  .card-data {
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1-5);
  }

  .contact-btn {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;

    &:hover box-icon {
      transform: translateX(0.5rem);
    }

    box-icon {
      font-size: 1rem;
      transition: 0.3s ease all;
    }
  }
`;

const Form = styled.form`
  width: 360px;

  .form-field {
    position: relative;
    margin-bottom: var(--mb-2);
    height: 4rem;
  }

  .form-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: none;
    color: var(--text-color);
    outline: none;
    border-radius: 0.75rem;
    padding: 1.5rem;
    z-index: 1;
  }

  .form-label {
    position: absolute;
    top: -0.75rem;
    left: 1.25rem;
    font-size: var(--smaller-font-size);
    padding: 0.25rem;
    background-color: var(--body-color);
    z-index: 10;
  }

  .form-textarea {
    height: 11rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 576px) {
    width: 100px;
  }
`;

export default Contact;

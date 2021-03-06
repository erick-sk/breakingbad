import React from 'react';
import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 900px;
  margin-top: -20rem;
  @media (min-width: 760px) {
    margin-top: 15rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 8rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Phrase = ({ phrase }) => {
  //   if (Object.keys(phrase).length === 0) return null;  hide quote in app

  return (
    <ContainerPhrase>
      <h1>{phrase.quote}</h1>
      <p>- {phrase.author}</p>
    </ContainerPhrase>
  );
};

export default Phrase;

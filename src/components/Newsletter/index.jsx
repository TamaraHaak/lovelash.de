import React from 'react';
import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  padding: 20px;
 
  text-align: center;
`;


const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;
const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ac0a25;
  color: white;
  border: none;
  cursor: pointer;
`;

function Newsletter() {
  return (
    <NewsletterWrapper>
      <h1>Abonnieren Sie unseren Newsletter</h1>
      <p>Melden Sie sich an, um unsere neuesten Nachrichten und Sonderangebote zu erhalten!</p>
      <Form>
        <Input type="email" placeholder="Geben sie ihre E-Mail Adresse ein" required />
        <Button type="submit">Abonnieren</Button>
      </Form>
    </NewsletterWrapper>
  );
}

export default Newsletter;

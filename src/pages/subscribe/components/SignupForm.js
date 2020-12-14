import React from 'react';
import styled from 'styled-components';

const SubscribeFrame = styled.div`
  margin: 100px;
  padding: 35px 150px 100px 150px;
  border: 1px solid ${props=>props.theme.colors.borderSubscribeFrame};
  text-align: center;
`;

const SubscribeInput = styled.div`
  padding-top: 60px;
`

const Button = styled.button`
  background-color: ${props=>props.theme.colors.buttonBackground};
  color: ${props=>props.theme.colors.buttonColor};
  font-size: 24px;
  font-weight: bold;
  border: ${props=>props.theme.colors.buttonBorder};
  padding: 2px 6px;
`
const Input = styled.input`
  background-color: ${props=>props.theme.colors.inputBackground};
  color: ${props=>props.theme.colors.inputColor};
  height: 30px;
  font-size: 24px;
  width: 280px;
  border: 1px solid ${props=>props.theme.colors.inputBorder};
  border-right: none;
`

const Title = styled.h1`
  color: ${props=>props.theme.colors.textColor};
`


export default function SignupForm() {
  return (
    <div>
      <SubscribeFrame>
        <Title>Sign up to my newsletter</Title>
        <SubscribeInput>
          <Input/><Button>Sign up</Button>
        </SubscribeInput>
      </SubscribeFrame>      
    </div>
  )
}

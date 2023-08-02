import logo from '../../../../../public/vite.svg';
import { Container } from './styled';
import React from 'react';
export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <span>todo</span>
    </Container>
  );
}

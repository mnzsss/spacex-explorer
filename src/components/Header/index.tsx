import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Title } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="SpaceX Explorer" />
      </Link>

      <Title>{children}</Title>
    </Container>
  );
};

export default Header;

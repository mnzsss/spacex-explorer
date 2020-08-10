import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Desenvolvido por
        <a href="https://bit.ly/mnzs_site" target="blank">
          Gabriel Menezes
        </a>
      </p>
    </Container>
  );
};

export default Footer;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import { Container } from './styles';

const BackButton: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container onClick={() => goBack()}>
      <FaChevronLeft />
      <span>Go Back</span>
    </Container>
  );
};

export default BackButton;

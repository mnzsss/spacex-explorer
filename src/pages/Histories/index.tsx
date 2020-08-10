import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { getHistoriesRequest } from '../../store/modules/history/actions';

import { Header } from '../../components';

import { Container, GoBackButton } from './styles';

const Histories: React.FC = () => {
  const { goBack } = useHistory();
  const dispacth = useDispatch();

  const { histories } = useSelector((state: StoreState) => state.history);

  useEffect(() => {
    dispacth(getHistoriesRequest());
  }, [dispacth]);

  return (
    <>
      <Header>Histories</Header>

      <Container>
        <GoBackButton onClick={() => goBack()}>
          <FaChevronLeft />
          <span>Go Back</span>
        </GoBackButton>
      </Container>
    </>
  );
};

export default Histories;

import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { StoreState } from '../../store/createStore';
import { getHistoriesRequest } from '../../store/modules/history/actions';

import { Header, Footer } from '../../components';

import { Container, GoBackButton, List, ListItem } from './styles';

const Histories: React.FC = () => {
  const { goBack } = useHistory();
  const dispacth = useDispatch();

  const { histories } = useSelector((state: StoreState) => state.history);

  useEffect(() => {
    dispacth(getHistoriesRequest());
  }, [dispacth]);

  const parsedHistories = useMemo(
    () =>
      histories.map(history => {
        return {
          ...history,
          formatted_date: format(
            new Date(history.event_date_utc),
            'yyyy-MM-dd',
          ),
        };
      }),
    [histories],
  );

  return (
    <>
      <Header>Histories</Header>

      <Container>
        <GoBackButton onClick={() => goBack()}>
          <FaChevronLeft />
          <span>Go Back</span>
        </GoBackButton>

        <List>
          {parsedHistories.map(history => (
            <ListItem key={history.id}>
              <span className="date">{history.formatted_date}</span>

              <p className="description">{history.title}</p>

              <a href={history.links.article} target="blank">
                View more
              </a>
            </ListItem>
          ))}
        </List>
      </Container>

      <Footer />
    </>
  );
};

export default Histories;

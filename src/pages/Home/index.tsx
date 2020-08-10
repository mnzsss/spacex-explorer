import React from 'react';
import { Link } from 'react-router-dom';

import rocket from '../../assets/spacex_dragon.png';

import { Header } from '../../components';

import { Container, Content, SectionsNavigator } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Explore expeditions in the Universe</h1>
          <p>
            We have gathered all the upcoming releases and the entire history of
            SpaceX so that you can discover everything about the universe that
            we know so little.
          </p>

          <SectionsNavigator>
            <Link to="/histories">
              <span>
                See
                <strong> Histories</strong>
                <br />
                informations
              </span>
            </Link>

            <Link to="/launches">
              <span>
                See
                <strong> Launches</strong>
                <br />
                informations
              </span>
            </Link>
          </SectionsNavigator>
        </div>

        <img src={rocket} alt="SpaceX Dragon" />
      </Content>
    </Container>
  );
};

export default Home;

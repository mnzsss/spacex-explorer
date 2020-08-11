import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
`;

export const List = styled.div`
  margin-top: 45px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 15px;
  padding-top: 5px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 130%;
  text-transform: uppercase;
  transition: color 0.2s;

  .date {
    color: #868686;
  }

  .description {
    flex: 1;
    margin-left: 30px;
    color: #ffffff;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #868686;

    &:hover {
      color: #ffffff;
    }
  }
`;

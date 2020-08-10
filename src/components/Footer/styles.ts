import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;

  p {
    font-size: 14px;
    line-height: 130%;
    color: #979797;

    a {
      margin-left: 5px;
      text-decoration: none;
      color: #979797;
      font-weight: bold;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

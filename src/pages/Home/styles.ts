import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    max-width: 495px;

    h1 {
      font-weight: bold;
      font-size: 46px;
      line-height: 130%;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
      line-height: 150%;
      margin-top: 20px;
    }
  }

  img {
    width: auto;
    height: 76vh;
  }
`;

export const SectionsNavigator = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  margin-top: 80px;

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 250px;
    border: 2px solid #ffffff;
    transition: all ease 0.4s;

    span {
      font-size: 20px;
      line-height: 130%;
      text-transform: uppercase;
      padding: 90px 0;
    }

    &:hover {
      background: #fff;

      span {
        color: #000;
      }
    }
  }
`;

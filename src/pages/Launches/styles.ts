import styled, { css } from 'styled-components';

interface PaginationButtonProps {
  notClicked?: boolean;
}

export const Container = styled.div`
  margin-top: 80px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  > div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 15px;

    svg {
      margin-right: 15px;
      color: #868686;
    }

    & + div {
      margin-left: 15px;
    }

    &.fill {
      flex: 1;
    }
  }

  input,
  select {
    background: transparent;
    border: 0;
    color: #fff;
    width: 100%;
  }

  select {
    min-width: 200px;
  }

  > button {
    height: 100%;
    color: #000;
    background: #fff;
    border: 2px solid #fff;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 20px;
    margin-left: 15px;
    transition: all 0.2s;

    &:hover {
      background: transparent;
      color: #fff;
    }
  }
`;

export const LaunchesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 30px;
`;

export const LaunchItem = styled.button`
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 20px;
  text-align: left;
  transition: all ease 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 130%;
    text-transform: uppercase;
  }

  .payload {
    div {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-size: 16px;

      svg {
        margin-right: 10px;
        width: 20px;
        height: 20px;

        path {
          stroke: #fff;
        }
      }
    }
  }

  p {
    color: #868686;
  }

  &:hover {
    background: #fff;
    color: #000;

    .payload {
      div {
        svg {
          path {
            stroke: #000;
          }
        }
      }
    }
  }
`;

export const Pagination = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.4s;

  & + button {
    margin-left: 20px;
  }

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background: #fff;
    color: #000;
  }

  ${({ notClicked }) =>
    notClicked &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;

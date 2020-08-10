import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
`;

export const GoBackButton = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 130%;
  text-transform: uppercase;
  transition: opacity 0.2s;

  svg {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

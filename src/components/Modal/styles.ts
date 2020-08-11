import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.95);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 900px;
  background: #000000;
  border: 2px solid #ffffff;
  padding: 36px;

  .no-content {
    width: 200px;
  }

  .close {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      text-transform: uppercase;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: transparent;
      border: 0;
      color: #fff;

      transition: all 0.2s;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  .video {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 30px;

      span,
      a {
        font-weight: bold;
        font-size: 18px;
        line-height: 130%;
        text-transform: uppercase;
        color: #ffffff;
        text-decoration: none;
      }

      span {
        font-size: 24px;
      }

      a {
        padding-bottom: 10px;
        border-bottom: 2px solid #fff;
        transition: all 0.2s;

        & + a {
          margin-top: 30px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      img {
        max-width: 150px;
        height: auto;
        margin: 25px 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;
    }

    iframe {
      flex: 1;
      border: 1px solid #fff;
    }
  }

  .fotos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 40px;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: radial-gradient(61.67% 177.77% at 101% 48.34%, #161616 0%, #000000 100%);
  color: #fff;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
 }

 body, input, button, table {
  font-size: 14px;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
  overflow: hidden;
 }

 #app {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 90%;
 }

 button {
  cursor: pointer;
 }
`;

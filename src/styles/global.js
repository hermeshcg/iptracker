import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #ddd;
  }
  h1{
    font: 26px Rubik, sans-serif;
  }
  h5{
    font: 16px Rubik, sans-serif;
    color: hsl(0, 0%, 59%);
    font-weight: medium;
  }
  p{
    font: 18px Rubik, sans-serif;
  }
  
  a{
    font: 18px Rubik, sans-serif;
  }
  strong{
    font: 20px Rubik, sans-serif;
    font-weight: 700; 
  }
  span{
    font: 15px Rubik, sans-serif;
  }
`;

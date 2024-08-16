import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/euro.jpeg';


const GlobalStyles = createGlobalStyle`
  body , html, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;


    
 
  }

  #root {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;


    
  }

  #root::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 1; /* Устанавливает прозрачность *
       
    z-index: -1;
  }
`;

export default GlobalStyles;


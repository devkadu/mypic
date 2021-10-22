
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: 'Poppins', sans-serif;
       
   }

   body {
       text-rendering: optimizeLegibility;
       -webkit-font-smoothing: antialiased;
   }

   html , body , #root{
       height: 100%;
   }
   `;

   export default GlobalStyle;



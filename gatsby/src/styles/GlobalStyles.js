import { createGlobalStyle } from 'styled-components';
import backgroundstars from '../assets/background-stars.svg';

// CSS variable or custom property
// :root allows this to be available anywhere in the app
const GlobalStyles = createGlobalStyle`

/* CSS psuedo class selector      */
/* Equivalent to the html type selector with the 
   exceptiion that it has a higher 
   specificity.                   */
:root {
  --white: #FFFFFF;
  --black: #070724;
  --grey: #38384F;
  --lightgrey: #838391;
  --lightblue: #419EBB;
  --orange: #EDA249;
  --violet: #6F2ED6;
  --red: #D83A34;
  --burntorange: #CD5120;
  --teal: #1EC2A4;
}


/* html type selector */
/* type as in html, p, ul, etc */
/* CSS type selector matches elements by node name */
/* The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. */
html {
  background-image: url(${backgroundstars});
  background-color: var(--black);
}



/* makes styling our widths much easier */
* {
  box-sizing: border-box;
}



/* remove all margin and padding so we can butt content up to the upper left corner of the screen */
body {
  margin: 0;
  padding: 0;

}


`;

export default GlobalStyles;

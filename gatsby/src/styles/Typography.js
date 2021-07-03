import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

body { 
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--white);
}

h1 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 5rem;
}

h2 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
}

h3 {
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: .75rem;
}

h4 {
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: .6875rem;
}

}



`;

export default Typography;

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  .navbar {
    /* so we can line up navbar items side by side */
    display: flex;
    /* push items far apart from eachother as possible */
    justify-content: space-between;
    /* The Title is large where link items are small. This will center everything so they are lined up */
    /* note that I'd like to say lined up horizontally but this is flexbox and our direction can change */
    align-items: center;
    /* give the navbar a background color */
    background-color: var(--black);
    /* give the text in the navbar a color */
    color: white;
    height: 85px;
    margin-bottom: 121px;
  }

  .rectangle {
    position: absolute;
    width: 100vw;
    height: 1px;
    left: 0px;
    top: 85px;
    background-color: var(--white);
    mix-blend-mode: normal;
    opacity: 0.2;
  }

  .title {
    /* make the title stick out with larger font */
    font-size: 1.5rem;
    /* push the Brand Name away from the screen but adds margin all around of course*/
    margin: 0.5rem;
  }

  /* style the ul in the div class navbar-links */
  .nav-links ul {
    /* remove all normal styling to the ul*/
    margin: 0;
    padding: 0;
    /* use flex to align items inside of the ul list*/
    display: flex;
  }

  /* select each li in the navbar's ul */
  .nav-links li {
    /* remove all list styling */
    list-style: none;
  }

  /* select all the anchor tags inside each li */
  .nav-links li a {
    /* remove text decoration */
    text-decoration: none;
    /* set text color to this */
    color: white;
    /* give each navbar link some space */
    padding: 1rem;
    /* allows the navbar links to show up as a larger size.  How? */
    display: block;
  }

  /* create a hover state over our li links */
  .navbar-links li:hover {
    /* turn background grey on hover */
    background-color: #555;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <nav className="navbar">
        <h1 className="title">THE PLANETS</h1>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">MERCURY</Link>
            </li>
            <li>
              <Link to="/venus">VENUS</Link>
            </li>
            <li>
              <Link to="/earth">EARTH</Link>
            </li>
            <li>
              <Link to="/mars">MARS</Link>
            </li>
            <li>
              <Link to="/jupiter">JUPITER</Link>
            </li>
            <li>
              <Link to="/saturn">SATURN</Link>
            </li>
            <li>
              <Link to="/uranus">URANUS</Link>
            </li>
            <li>
              <Link to="/neptune">NEPTUNE</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="rectangle" />
    </NavStyles>
  );
}

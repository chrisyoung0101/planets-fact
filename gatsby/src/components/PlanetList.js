import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from './Layout';
import Button from './Button';
import InfoTangle from './InfoTangle';

const SinglePlanetStyles = styled.div`
  body {
    margin: 40px;
  }

  /* grid-container : contains all the grid items 
grid-item : common styles for all grid-items
grid-item styling by type :
    grid-item-content
    grid-item-sidebar
    grid-item-footer

flexbox-container-sidebar : flexbox container for sidebar items
flexbox-container-footer : flexbox container for footer items
flexbox-item : commone to all flexbox items
flex-sidebar-item : specific to sidebar items
flex-footer-item : specific to footer items */

  /* Flexbox */

  .flexbox-container-sidebar {
    padding-top: 80px;
    display: flex;
    ${'' /* position: relative; */}
    background-color: blue;
    flex-direction: column;
  }

  .flex-sidebar-item {
    display: flex;
    width: 200px;
    ${'' /* position: relative; */}
    ${'' /* flex-direction: row; */}
  }

  .flexbox-container-footer {
    display: flex;
    position: relative;
    justify-content: space-between;
    background-color: blue;
  }

  .flex-footer-item {
    display: flex;
    position: relative;
    min-height: 100px;
  }

  /* Grid */

  .grid-item-content {
    grid-area: grid-item-content;
    /* style individual grid item */
    justify-self: center;
    /* style individual grid item */
    align-self: center;
  }

  .grid-item-sidebar {
    grid-area: grid-item-sidebar;
    border: 1px solid white;
  }

  .grid-item-footer {
    grid-area: footer;
    border: 1px solid white;
  }

  .grid-container {
    display: grid;
    margin: 0px 155px 56px 155px;
    ${'' /* grid-gap: 10px; */}
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'grid-item-content grid-item-content grid-item-sidebar '
      'footer  footer  footer';
    background-color: rgb(226, 167, 17);
    border: 1px solid white;
  }

  .grid-item-footer {
    ${'' /* background-color: #999; */}
  }
`;

function SinglePlanet({ planet }) {
  return (
    <Layout>
      <SinglePlanetStyles>
        <div className="grid-container">
          <div className="grid-item grid-item-content">
            <Img fixed={planet.overviewImage.asset.fixed} />
          </div>
          <div className="grid-item grid-item-sidebar">
            <div className="flexbox-container-sidebar">
              <div className="flexbox-item flex-sidebar-item">
                {planet.name}
              </div>
              <div className="flexbox-item flex-sidebar-item">
                {planet.overviewContent}
              </div>
              <div className="flexbox-item flex-sidebar-item">
                {planet.overviewSource}
              </div>
              <div className="flexbox-item flex-sidebar-item">
                <Button text="OVERVIEW" />
              </div>
              <div className="flexbox-item flex-sidebar-item">
                <Button text="INTERNAL STRUCTURE" />
              </div>
              <div className="flexbox-item flex-sidebar-item">
                <Button text="SURFACE GEOLOGY" />
              </div>
            </div>
          </div>
          <div className="grid-item grid-item-footer" />
          <div className="flexbox-container-footer">
            <div className="flexbox-item flex-footer-item">
              <InfoTangle titleText="ROTATION TIME" bodyText="58.6 DAYS" />
            </div>
            <div className="flexbox-item flex-footer-item">
              <InfoTangle titleText="REVOLUTION TIME" bodyText="87.97 DAYS" />
            </div>
            <div className="flexbox-item flex-footer-item">
              <InfoTangle titleText="RADIUS" bodyText="2,439.7 KM" />
            </div>
            <div className="flexbox-item flex-footer-item">
              <InfoTangle titleText="AVERAGE TEMP." bodyText="430˚ C" />
            </div>
          </div>
        </div>
      </SinglePlanetStyles>
    </Layout>
  );
}

export default function PlanetList({ planets }) {
  // console.log(planets);

  return (
    <div>
      {planets.map((planet) => (
        <SinglePlanet key={planet.id} planet={planet} />
      ))}
    </div>
  );
}

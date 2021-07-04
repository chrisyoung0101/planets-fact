import React from 'react';
import Img from 'gatsby-image';
import Layout from './Layout';
import Button from './Button';
import InfoTangle from './InfoTangle';

function SinglePlanet({ planet }) {
  return (
    <Layout>
      <div>
        <Img fixed={planet.overviewImage.asset.fixed} />
        <br />
        {planet.overviewContent}
        <br />
        {planet.overviewSource}
        <br />
        <Button text="OVERVIEW" />
        <Button text="INTERNAL STRUCTURE" />
        <Button text="SURFACE GEOLOGY" />
        <InfoTangle titleText="ROTATION TIME" bodyText="58.6 DAYS" />
        <InfoTangle titleText="REVOLUTION TIME" bodyText="87.97 DAYS" />
        <InfoTangle titleText="RADIUS" bodyText="2,439.7 KM" />
        <InfoTangle titleText="AVERAGE TEMP." bodyText="430˚ C" />
      </div>
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

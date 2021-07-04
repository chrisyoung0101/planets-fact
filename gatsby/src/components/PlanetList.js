import React from 'react';
import Img from 'gatsby-image';
import Layout from './Layout';
import Button from './button';

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

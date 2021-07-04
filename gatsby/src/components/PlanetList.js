import React from 'react';
import Img from 'gatsby-image';
import Layout from './Layout';

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

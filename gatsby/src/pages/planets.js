import React from 'react';
import { graphql } from 'gatsby';
import PlanetList from '../components/PlanetList';

export default function PlanetsPage({ data }) {
  // console.log({ data });
  const planets = data.planets.nodes;
  return (
    <div>
      <PlanetList planets={planets} />
    </div>
  );
}

export const query = graphql`
  query PlanetQuery {
    planets: allSanityPlanet {
      nodes {
        name
        id
        slug {
          current
        }
        overviewContent
        overviewSource
        overviewImage {
          asset {
            fixed(width: 290, height: 290) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 50) {
              ...GatsbySanityImageFluid
            }
          }
        }
        # end nodes
      }
    }
  }
`;

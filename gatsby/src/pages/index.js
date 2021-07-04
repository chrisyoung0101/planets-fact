import React from 'react';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

export default function Mercury() {
  return (
    <Layout>
      <body>
        <h1>Mercury</h1>
        <p>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="source">
          Source :&nbsp;
          <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a>
        </div>
      </body>
    </Layout>
  );
}

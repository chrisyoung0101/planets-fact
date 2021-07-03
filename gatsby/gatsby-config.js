// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
// gatsby docs show common js modules
// this is ES module(s)
// we have a helper script in pacckage.json to allow us to use ES modules
import dotenv from 'dotenv';

// access environmental variables
dotenv.config({ path: 'env' });
console.log(process.env.SANITY_TOKEN);

export default {
  // restart server when making changes here if issues arise
  siteMetadata: {
    title: `Planets Fact`,
    siteUrl: `https://planets.fact`,
    description: `The best Planets Fact Site in the Solar System`,
    twitter: `@planetsFact`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rua1qhj8',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Antonio\:500`, `Spartan\:400,700`],
        display: 'swap',
      },
    },
  ],
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kinnas House of Love`,
    siteUrl: `https://www.yourdomain.tld`,
    author: 'Phifer Web Solutions',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wzk0i0ir',
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sanity-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
  ],
}

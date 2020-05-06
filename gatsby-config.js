module.exports = {
  siteMetadata: {
    title: `Learning Curve Podcast`,
    description: `An informal conversation between a developer and UX thinker.`,
    author: `@learningcurvpod`,
    url: `https://learningcurve.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-anchor`,
      options: {
        rss: `https://anchor.fm/s/39d9b14/podcast/rss`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/episodes/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `learning-curve-podcast`,
        short_name: `learning-curve`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#805AD5`,
        display: `minimal-ui`,
        icon: `src/images/lc-logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};

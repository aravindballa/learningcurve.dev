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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};

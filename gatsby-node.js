const path = require('path');

const getEpSlug = require('./src/utils/getEpSlug');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    query {
      allAnchorEpisode {
        edges {
          node {
            id
            title
            itunes {
              episode
            }
          }
        }
      }
    }
  `);
  result.data.allAnchorEpisode.edges.forEach(({ node }) => {
    const slug = getEpSlug(node);
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/EpisodePage.js`),
      context: {
        slug,
        id: node.id,
        episode: parseInt(node.itunes.episode, 10),
      },
    });
    createRedirect({
      fromPath: '/' + node.itunes.episode,
      toPath: `/${slug}`,
      isPermanent: true,
    });
  });
};

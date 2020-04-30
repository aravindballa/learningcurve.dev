const path = require('path');
const slugify = require(`@sindresorhus/slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    query {
      allAnchorEpisode {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);
  result.data.allAnchorEpisode.edges.forEach(({ node }) => {
    const slug = slugify(node.title);
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/EpisodePage.js`),
      context: {
        slug,
        id: node.id,
        episode: parseInt(node.title.match(/^([0-9]+)\./)[1], 10),
      },
    });
    createRedirect({
      fromPath: '/' + node.title.match(/^([0-9]+)\./)[1],
      toPath: `/${slug}`,
      isPermanent: true,
    });
  });
};

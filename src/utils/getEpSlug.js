const slugify = require('@sindresorhus/slugify');

/**
 *
 * @param {{ title: string, itunes: { episode: string }}} episode Episode from the source-anchor
 */
const getEpSlug = (episode) => {
  return slugify(episode.itunes.episode + ' ' + episode.title);
};

module.exports = getEpSlug;

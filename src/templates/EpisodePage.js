import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';
import { motion } from 'framer-motion';

const EpisodePage = ({ pageContext, data }) => {
  const {
    title,
    pubDate,
    content,
    enclosure: { length, url },
  } = data.anchorEpisode;
  return (
    <div className="max-w-3xl mx-auto">
      <div className="my-4 px-1 flex justify-between">
        <button
          className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
          to="/"
          onClick={() => {
            navigate(-1);
          }}
        >{`← Home`}</button>
        <p className="text-gray-500">🎙 Learning Curve Podcast</p>
      </div>
      <motion.div
        className="bg-white p-8 lg:px-16 rounded-lg shadow-md"
        magic
        magicId={pageContext.id}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">
          {new Date(pubDate).toLocaleString(`en-US`, {
            month: `long`,
            day: `2-digit`,
            year: `numeric`,
          })}{' '}
        </p>
        <audio className="w-full my-8" controls src={url} />
        <h2 className="text-lg font-bold">Show Notes</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </motion.div>
    </div>
  );
};

export const query = graphql`
  query EpisodeQuery($id: String) {
    anchorEpisode(id: { eq: $id }) {
      title
      pubDate
      isoDate(fromNow: true)
      link
      content
      enclosure {
        length
        url
      }
    }
  }
`;

export default EpisodePage;

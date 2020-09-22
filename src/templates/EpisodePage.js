import React from 'react';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import prettyMilliseconds from 'pretty-ms';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import Player from '../components/Player';
import TranscriptHeader from '../components/TranscriptHeader';

// https://res.cloudinary.com/djeivq7td/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/w_857,c_fit,co_rgb:000000,g_north_west,x_108,y_87,l_text:Raleway_72_bold:10%20-%20Practical%20remote%20working%20tips/w_857,c_fit,co_rgb:000000,g_south_west,x_140,y_180,l_text:Raleway_36:Mar%2023%202020/w_857,c_fit,co_rgb:000000,g_south_west,x_140,y_120,l_text:Raleway_36:21m%2024s/lc-og

const EpisodePage = ({ pageContext, data }) => {
  const {
    title,
    pubDate,
    content,
    enclosure: { url },
    itunes: { duration, episode, image },
    contentSnippent,
  } = data.anchorEpisode;

  const {
    body,
    frontmatter: { keywords, hasHighlights },
  } = data.mdx || { body: null, frontmatter: { keywords: '' } };

  const dateString = new Date(pubDate).toLocaleString(`en-US`, {
    month: `long`,
    day: `2-digit`,
    year: `numeric`,
  });
  const durationString = prettyMilliseconds(duration * 1000);
  const ogImage = `https://res.cloudinary.com/djeivq7td/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/w_857,c_fit,co_rgb:000000,g_north_west,x_108,y_87,l_text:Raleway_72_bold:
    ${encodeURI(
      episode +
        '. ' +
        title
          .replace('.', ' -')
          .replace('?', '')
          .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ''
          )
          .trim()
    )}/w_857,c_fit,co_rgb:000000,g_south_west,x_140,y_180,l_text:Raleway_36:${dateString.replace(
    ',',
    ''
  )}/w_857,c_fit,co_rgb:000000,g_south_west,x_140,y_120,l_text:Raleway_36:${durationString}/lc-og`;

  return [
    <SEO title={title} description={contentSnippent} image={ogImage} keywords={keywords} />,
    <div className="max-w-3xl mx-auto">
      <div className="my-4 px-1 flex justify-between">
        <Link
          className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
          to="/"
        >{`← Home`}</Link>
        <p className="text-gray-500">🎙 Learning Curve Podcast</p>
      </div>
      <div className="bg-background-light p-8 lg:px-16 rounded-lg shadow-md">
        <p className="text-xs font-bold m-0 text-gray-600">EP {episode}</p>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">
          {dateString} ᐧ {durationString}
        </p>
        <Player url={url} image={image} />
        <h2 className="text-lg font-bold">Show Notes</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        {body ? (
          <>
            {!hasHighlights && <TranscriptHeader episode={episode} />}
            <MDXRenderer>{body}</MDXRenderer>
          </>
        ) : null}
      </div>
    </div>,
  ];
};

export const query = graphql`
  query EpisodeQuery($id: String, $episode: Int) {
    anchorEpisode(id: { eq: $id }) {
      title
      pubDate
      isoDate(fromNow: true)
      link
      content
      enclosure {
        url
      }
      itunes {
        duration
        episode
        image
      }
    }
    mdx(frontmatter: { episode: { eq: $episode } }) {
      frontmatter {
        keywords
        hasHighlights
      }
      body
    }
  }
`;

export default EpisodePage;

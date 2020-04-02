import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const defaultImage = `https://res.cloudinary.com/djeivq7td/image/upload/v1576063962/learning-curve/lc-logo.png`;
function SEO({
  description,
  lang = 'en',
  meta,
  keywords = 'learning,curve,podcast',
  title,
  image = defaultImage,
}) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: image,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `keywords`,
          content: keywords,
        },
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: '',
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;

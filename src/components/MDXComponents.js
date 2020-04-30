import React from 'react';

const twitterHandle = {
  'Aravind Balla': 'aravindballa',
  'Brittik Basu': 'brittikbasu',
  Aravind: 'aravindballa',
  Brittik: 'brittikbasu',
};

const Paragraph = ({ children, ...rest }) => {
  console.log(children);
  if (Array.isArray(children)) {
    const [speakerString, ...restChildren] = children;
    const contentToDisplay = restChildren.filter((c) => {
      if (typeof c === 'string') return !!c.trim();
      return c.props.mdxType !== 'br';
    });
    const speakerMatch = speakerString.match(/(.*?)\s([0-9]+:[0-9]+)\s*/);
    if (speakerMatch) {
      return (
        <div className="mt-4">
          <div className="flex items-center">
            <img
              alt={speakerMatch[1]}
              className="w-8 rounded-full mr-2"
              src={`https://avatars.io/twitter/${twitterHandle[speakerMatch[1]]}`}
            />
            <div className="leading-tight">
              <p className="text-gray-900 text-sm">
                <strong>{speakerMatch[1]}</strong>
              </p>
              <p className="text-gray-700">
                <span className="text-xs">{speakerMatch[2]}</span>
              </p>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-gray-900" {...rest} children={contentToDisplay} />
          </div>
        </div>
      );
    }
  }
  if (typeof children === 'string') {
    const speakerMatch = children.match(/(.*?)\s([0-9]+:[0-9]+)\s*/);
    if (speakerMatch) {
      return (
        <div className="mt-4">
          <div className="flex items-center">
            <img
              alt={speakerMatch[1]}
              className="w-8 rounded-full mr-2"
              src={`https://avatars.io/twitter/${twitterHandle[speakerMatch[1]]}`}
            />
            <div className="leading-tight">
              <p className="text-gray-900 text-sm">
                <strong>{speakerMatch[1]}</strong>
              </p>
              <p className="text-gray-700">
                <span className="text-xs">{speakerMatch[2]}</span>
              </p>
            </div>
          </div>
          <div className="mt-1">
            <p
              className="text-gray-900"
              {...rest}
              children={children.replace(speakerMatch[0], '')}
            />
          </div>
        </div>
      );
    }
  }
  return <p className="mt-2" {...rest} children={children} />;
};

const BlockQuote = (props) => (
  <blockquote
    className="text-xl p-2 pb-4 pl-8 border-l-2 rounded font-serif italic mt-2 bg-gray-100"
    {...props}
  />
);

export default {
  p: Paragraph,
  blockquote: BlockQuote,
};

import React from 'react';

const TranscriptHeader = ({ episode }) => {
  return (
    <>
      <h2 className="mt-4 text-lg font-bold">Transcript</h2>
      <p className="text-sm p-4 rounded-lg text-pink-100" style={{ backgroundColor: '#97266d55' }}>
        🤗 This is transcribed using an{' '}
        <a className="text-pink-300 underline" href="https://otter.ai">
          AI tool
        </a>
        . So don't expected it to be perfect. If you find mistakes, please help us polishing this by{' '}
        <a
          className="text-pink-300 underline"
          href={`https://github.com/aravindballa/learningcurve.dev/edit/master/episodes/${episode}.md`}
        >
          making a PR
        </a>
        .
      </p>
    </>
  );
};

export default TranscriptHeader;

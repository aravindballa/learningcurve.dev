import React from 'react';

const twitterHandle = {
  'Aravind Balla': 'aravindballa',
  'Brittik Basu': 'brittikbasu',
  Aravind: 'aravindballa',
  Brittik: 'brittikbasu',
};

const TranscriptSpeaker = ({ name, time }) => (
  <div className="flex items-center mb-1">
    <img
      alt={name}
      className="w-8 rounded-full mr-2"
      src={`https://avatars.io/twitter/${twitterHandle[name]}`}
    />
    <div className="leading-tight">
      <p className="text-gray-900 text-sm m-0">
        <strong>{name}</strong>
      </p>
      <p className="text-gray-700 m-0">
        <span className="text-xs">{time}</span>
      </p>
    </div>
  </div>
);

export default {
  TranscriptSpeaker,
};

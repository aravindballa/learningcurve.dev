import React from 'react';

import AravindAvatar from '../images/aravind-avatar.png';
import BrittikAvatar from '../images/brittik-avatar.jpg';

const avatar = {
  'Aravind Balla': AravindAvatar,
  'Brittik Basu': BrittikAvatar,
  Aravind: AravindAvatar,
  Brittik: BrittikAvatar,
};

const TranscriptSpeaker = ({ name, time }) => (
  <div className="flex items-center mb-1">
    <img alt={name} className="w-8 rounded-full mr-2" src={avatar[name]} />
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

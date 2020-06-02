import React from 'react';

import Subscribe from './Subscribe';

export default () => (
  <footer className="bg-gray-100 mt-16 px-4">
    <div className="get-notified bg-background p-4 rounded max-w-lg mx-auto -mt-8 text-gray-900 border border-gray-200 shadow-md">
      <h3 className="text-xl font-bold">Get notified 📬</h3>
      <p>We'll send a mail whenever a new episode releases, along with the show notes!</p>
      <p>Let us keep you informed.</p>
      <Subscribe />
      <p className="text-xs text-gray-600 text-center">
        🚫 <i>No Spam Gauranteed</i>
      </p>
    </div>
    <nav className="flex justify-center max-w-4xl mx-auto p-2 md:p-4 text-xs text-gray-500">
      <p>© Brittik & Aravind ▫ 2020</p>
    </nav>
  </footer>
);

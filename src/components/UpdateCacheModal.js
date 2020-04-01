import React from 'react';

export default () => {
  const [swUpdate, setSwUpdate] = React.useState(() => {
    if (window.localStorage) {
      return JSON.parse(localStorage.getItem('sw-update') || 'false');
    }
    return false;
  });

  const handleRefresh = () => {
    setSwUpdate(false);
    if (window.localStorage) {
      localStorage.setItem('sw-update', 'false');
    }
    window.location.reload(true);
  };

  return swUpdate ? (
    <div className="fixed p-4 bottom-0 right-0 w-full md:w-64 md:m-4 bg-purple-200 md:rounded-lg text-purple-700 shadow-md">
      <p>
        A new version of the website is available! Click the refresh button below to see the
        changes. 🎩🎊
      </p>
      <button
        className="mt-4 py-1 px-2 bg-green-200 text-green-800 rounded text-sm"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  ) : null;
};

import React from 'react';

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default ({ image, url }) => {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const audioRef = React.useRef(null);

  const togglePlaying = () => setPlaying(prev => !prev);

  React.useEffect(() => {
    if (audioRef && audioRef.current) {
      if (playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [playing]);

  useInterval(() => {
    if (audioRef && audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setProgress(Math.ceil((currentTime * 100) / duration));
    }
  });

  return (
    <>
      <audio src={url} ref={audioRef} />
      <div className="flex my-4">
        <img height="96" className="w-24 rounded" src={image} alt="episode art" />
        <div className="ml-2 flex-1">
          <div className="relative mb-4">
            <div className="h-2 w-full bg-purple-200 rounded"></div>
            <div
              className="absolute h-2 bg-green-400 rounded"
              style={{ top: 0, width: `${progress}%` }}
            ></div>
          </div>
          <div
            className="p-2 cursor-pointer bg-gray-200 rounded-full inline-block"
            onClick={togglePlaying}
          >
            {playing ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
};

const Subscribe = () => {
  const [email, setEmail] = React.useState(``);
  const [status, setStatus] = React.useState(`READY`);

  const handleChange = e => setEmail(e.target.value);

  const getStatus = async () => {
    try {
      const res = await fetch(`/`, {
        method: `POST`,
        headers: { [`Content-Type`]: `application/x-www-form-urlencoded` },
        body: encode({ [`form-name`]: `mailing-list`, email })
      });
      if (res.status === 200) setStatus(`DONE`);
      else setStatus(`ERROR`);
    } catch (err) {
      setStatus(`ERROR`);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    getStatus();

    setStatus(`SUBMITTING`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex my-4">
        {status === `READY` ? (
          <>
            <input
              className="flex-1 bg-gray-300 rounded mr-4 px-2 border-2 border-gray-300 focus:bg-white focus:border-gray-500 outline-none"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              type="email"
              value={email}
            />
            <button
              className="w-16 text-xs bg-purple-600 rounded py-2 text-white hover:bg-purple-700 focus:bg-purple-700 outline-none"
              type="submit"
            >
              NOTIFY
            </button>
          </>
        ) : null}
        {status === `SUBMITTING` ? (
          <p className="text-center w-full">Submitting 🙇‍♂️</p>
        ) : null}
        {status === `DONE` ? (
          <p className="text-center w-full">Thanks 🎉</p>
        ) : null}
        {status === `ERROR` ? (
          <p className="text-center w-full text-sm text-gray-700">
            Something went wrong. Could you refresh page and retry? 🙊
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default Subscribe;

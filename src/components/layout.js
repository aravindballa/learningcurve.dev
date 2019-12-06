import PropTypes from "prop-types";
import React from "react";

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-gray-100 text-gray-900">
      {/* <Header /> */}

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-gray-300 mt-16 px-4">
        <div className="get-notified bg-white p-4 rounded max-w-lg mx-auto -mt-8">
          <h3 className="text-xl font-bold">Get notified 📬</h3>
          <p>
            You are a <i>little</i> early here. We are launching on 9
            <sup>th</sup> December. No worries though.
          </p>
          <p>Let us keep you informed.</p>
          <form action="POST" name="mailing-list" netlify>
            <div className="flex my-4">
              <input
                className="flex-1 bg-gray-300 rounded mr-4 px-2 border-2 border-gray-300 focus:bg-white focus:border-gray-500 outline-none"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <button
                className="w-16 text-xs bg-purple-600 rounded py-2 text-white hover:bg-purple-700 focus:bg-purple-700 outline-none"
                onClick={e => e.preventDefault()}
                type="submit"
              >
                NOTIFY
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-600 text-center">
            🚫 <i>No Spam Gauranteed</i>
          </p>
        </div>
        <nav className="flex justify-center max-w-4xl mx-auto p-2 md:p-4 text-xs text-gray-500">
          <p>© Brittik & Aravind ▫ 2019</p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

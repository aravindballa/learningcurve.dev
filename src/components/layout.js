import React from "react";
import PropTypes from "prop-types";

import Subscribe from "./Subscribe";

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-gray-100 text-gray-900">
      {/* <Header /> */}

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-gray-300 mt-16 px-4">
        <div className="get-notified bg-white p-4 rounded max-w-lg mx-auto -mt-8 text-gray-900">
          <h3 className="text-xl font-bold">Get notified 📬</h3>
          <p>
            We'll send a mail whenever a new episode releases, along with the
            show notes!
          </p>
          <p>Let us keep you informed.</p>
          <Subscribe />
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

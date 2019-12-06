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

      {/* <footer className="bg-white">
        <nav className="flex justify-center max-w-4xl mx-auto p-2 md:p-4 text-xs text-gray-500">
          <p>© Brittik & Aravind ▫ 2019</p>
          <p>
            <a href="https://github.com/aravindballa/learningcurve.dev">
              Source
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

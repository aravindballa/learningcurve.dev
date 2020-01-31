import React from 'react';
import PropTypes from 'prop-types';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';

import Footer from '../components/Footer';

function Layout({ location, children }) {
  return (
    <TransitionProvider location={location} leave={{ config: { duration: 1000 } }}>
      <div className="flex flex-col font-sans min-h-screen bg-gray-100 text-gray-900">
        <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
          <TransitionViews>{children}</TransitionViews>
        </main>
        <Footer />
      </div>
    </TransitionProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import { MagicMotion } from 'framer-motion';

import Footer from './Footer';
import UpdateCacheModal from './UpdateCacheModal';

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-gray-100 text-gray-900">
      <MagicMotion>
        <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </main>
        <Footer />
      </MagicMotion>
      <UpdateCacheModal />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

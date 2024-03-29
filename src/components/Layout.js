import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';

import Footer from './Footer';
import UpdateCacheModal from './UpdateCacheModal';
import mdxComps from './MDXComponents';

function Layout({ children }) {
  return (
    <MDXProvider components={mdxComps}>
      <div className="bg-background text-foreground flex flex-col font-sans min-h-screen bg-gray-100 text-gray-900 mb-6">
        <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </div>
        <Footer />
        <UpdateCacheModal />
      </div>
    </MDXProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

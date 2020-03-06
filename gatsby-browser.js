import React from 'react';
import Layout from './src/components/layout';
import './src/css/style.css';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// export const shouldUpdateScroll = () => {
//   return false;
// };

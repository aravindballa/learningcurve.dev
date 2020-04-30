import React from 'react';
import Layout from './src/components/Layout';
import './src/css/style.css';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onServiceWorkerUpdateFound = () => {
  if (window.localStorage) {
    window.localStorage.setItem('sw-update', 'true');
  }
};

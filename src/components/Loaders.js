import React from 'react';
import Loader from 'react-loader-spinner';

export const ButtonLoader = () => (
  <Loader type="Oval" color="black" width="26" height="26" />
);

export const PageLoader = () => (
  <div className="loader">
    <Loader type="Oval" color="black" width="56" height="56" />
  </div>
);

// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV;
const rootURL = 
  env !== 'development'
    ? '/'
    : '/react-redux-base/';

export default rootURL;

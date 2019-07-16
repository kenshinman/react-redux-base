import React from "react";

const Error404 = ({ location }) => (
  <section className='container' id='error404'>
    <h1>Error: 404</h1>
    <p>The requested url <span id='address404'>{ location.pathname }</span> was not found on the server.</p>
  </section>
);

export default Error404;

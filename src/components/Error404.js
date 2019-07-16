import React from 'react';

const Error404 = ({ location }) => (
    <div className='container'>
        <h3>Error: 404</h3>
        <p>The requested url <code>{ location.pathname }</code> was not found on the server.</p>
    </div>
)

export default Error404;

import React from 'react';
import { doAlert } from '../../components/alert/AlertComponent';

import rootURL from '../../constants';

const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <button onClick={() => doAlert('This is a message', 'success')}>
        click me
      </button>

      <p><a href={`${rootURL}about`}>About</a></p>
      <p><a href={`${rootURL}some-unknown-url`}>Error 404 page</a></p>
    </div>
  );
};

export default Login;

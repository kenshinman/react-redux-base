import React from 'react';
import { doAlert } from '../../components/alert/AlertComponent';

const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <button onClick={() => doAlert('This is a message', 'success')}>
        click me
      </button>

      <p><a href='/about'>About</a></p>
      <p><a href='/some-unknown-url'>Error 404 page</a></p>
    </div>
  );
};

export default Login;

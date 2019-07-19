import React from 'react';
import { Link } from 'react-router-dom';
import { doAlert } from '../../components/alert/AlertComponent';


const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <button onClick={() => doAlert('This is a message', 'success')}>
        click me
      </button>

      <p><Link to='/about'>About</Link></p>
      <p><Link to='/some-unknown-url'>Error 404 page</Link></p>
    </div>
  );
};

export default Login;

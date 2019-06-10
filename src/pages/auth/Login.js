import React from "react";
import { doAlert } from "../../components/alert/AlertComponent";

const Login = () => {
  return (
    <>
      <h2>Login here</h2>
      <button onClick={() => doAlert("This is a message", "success")}>
        click me
      </button>
    </>
  );
};

export default Login;

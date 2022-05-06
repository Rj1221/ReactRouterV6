import React from "react";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() =>
          dispatch({
            type: "login",
          } )
        }
      >
        Login
      </button>
    </>
  );
}

export default Login;

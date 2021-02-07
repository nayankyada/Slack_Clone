import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { Button } from "@material-ui/core";
import { userValue } from "./Context";
const Login = () => {
  const { user, login } = userValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        console.log(response.user);
        login(response.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" />
        <h1>Sign in to Slack-Clone</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
export default Login;

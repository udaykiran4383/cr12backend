import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId ="949228241511-mbfe9v2nh8u098587qflqstthjfo5oso.apps.googleusercontent.com"
// const clientId ="949dfhgrthjkyjukhijkml,vhfygyu.googleusercontent.com"

function GoogleLoginComponent() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
      />
      </GoogleOAuthProvider>
  );
}

export default GoogleLoginComponent;

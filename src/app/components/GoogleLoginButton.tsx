"use client";

import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

export function GoogleLoginButton() {
  const handleSuccess = ({ clientId, credential }: CredentialResponse) => {
    console.log({ clientId, credential });
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />;
}

"use client";

import { GoogleLogin, CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";

export function GoogleLoginButton() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error(
      "Missing Google Client ID. Please set the NEXT_PUBLIC_GOOGLE_CLIENT_ID environment variable."
    );
  }

  const handleSuccess = ({ clientId, credential }: CredentialResponse) => {
    console.log({ clientId, credential });
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
}

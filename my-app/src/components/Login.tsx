import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { oauthConfig } from '../oauthConfig';

const clientId = oauthConfig.clientId

function Login() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = () => {
        console.log(error);
    };
  function onFailure () {}
  return (
    <div className="signInButton">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

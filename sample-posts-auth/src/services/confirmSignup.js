import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function confirmSignUp(username, confirmationCode) {
  const user = new CognitoUser({
    Username: username,
    Pool: userpool
  });

  return new Promise((resolve, reject) => {
    user.confirmRegistration(
      confirmationCode,
      true,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

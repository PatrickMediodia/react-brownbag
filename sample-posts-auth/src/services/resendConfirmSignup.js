import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function resendConfirmSignUp(username) {
  const user = new CognitoUser({
    Username: username,
    Pool: userpool
  });

  return new Promise((resolve, reject) => {
    try {
      user.resendConfirmationCode(
        username, 
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
      });
    } catch (err) {
        reject(err);
    }
  });
};

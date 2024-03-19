import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function resendConfirmSignUp({ username, confirmationCode }) {
  return new Promise((resolve, reject) => {
    try {
      const user = new CognitoUser({
        Username: username,
        Pool: userpool
      });

      const confirmSignUpEvent = user.resendSignUp(
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
      
      resolve(confirmSignUpEvent);
    } catch (err) {
        console.log(err);
        reject(err);
    }
  });
};

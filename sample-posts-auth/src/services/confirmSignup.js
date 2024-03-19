import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function confirmSignUp({ username, confirmationCode }) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = new CognitoUser({
        Username: username,
        Pool: userpool
      });
      
      console.log(user);

      const confirmSignUpEvent = user.confirmRegistration(
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

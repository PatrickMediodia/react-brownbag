import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function authenticate({ email, password }) {
  return new Promise((resolve,reject) => {
      const user = new CognitoUser({
          Username: email,
          Pool: userpool
      });

      const authDetails= new AuthenticationDetails({
          Username: email,
          Password: password
      });
      
      user.authenticateUser(authDetails, {
          onSuccess: (result) => {
              console.log("login successful");
              resolve(result);
          },
          onFailure: (err) => {
              console.log(`login failed ${err}`);
              reject(err);
          }
      });
  });
};

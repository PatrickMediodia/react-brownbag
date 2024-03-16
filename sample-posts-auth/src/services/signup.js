import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function signup({ email, password }) {
  return new Promise((resolve, reject) => {
      const atrribute = new CognitoUserAttribute({
          Name: 'email',
          Value: email,
      });
      const attributeList = [atrribute];
      
      userpool.signUp(
        email,
        password,
        attributeList,
        null,
        (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        }
      );
  });
};

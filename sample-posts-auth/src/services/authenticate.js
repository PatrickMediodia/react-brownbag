import userpool from './userpool';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

export default function authenticate({ email, password }) {
    const user = new CognitoUser({
        Username: email,
        Pool: userpool
    });
    
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });
    
    return new Promise((resolve,reject) => {
        user.authenticateUser(authDetails,{
            onSuccess: (result) => {
                resolve(result);
            },
            onFailure: (err) => {
                reject(err);
            }
        });
    });
};

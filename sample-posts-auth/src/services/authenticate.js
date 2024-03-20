import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function authenticate({ email, password }) {
    const user = new CognitoUser({
        Username: email,
        Pool: userpool
    });
    
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });
    console.log(authDetails);
    return new Promise((resolve,reject) => {
        user.authenticateUser(authDetails,{
            onSuccess: (result) => {
                resolve(user);
            },
            onFailure: (err) => {
                reject(err);
            }
        });
        
        // return the actual user and store it, rather than the result
    });
};

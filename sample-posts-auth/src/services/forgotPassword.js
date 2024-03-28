import userpool from './userpool';
import { CognitoUser } from 'amazon-cognito-identity-js';

export default function forgotPassword(username) {
    const user = new CognitoUser({
        Username: username,
        Pool: userpool,
    });

    return new Promise((resolve, reject) => {
        user.forgotPassword({
            onSuccess: (result) => {
                resolve(result);
            },
            onFailure: (err) => {
                reject(err);
            }
        });
    });
};

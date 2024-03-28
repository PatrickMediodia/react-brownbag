import userpool from './userpool';
import { CognitoUser } from 'amazon-cognito-identity-js';

export default function confirmForgotPassword({ username, verificationCode, newPassword }) {
    const user = new CognitoUser({
        Username: username,
        Pool: userpool,
    });

    return new Promise((resolve, reject) => {
        user.confirmPassword(verificationCode, newPassword, {
            onFailure(err) {
                reject(err);
            },
            onSuccess(res) {
                resolve(res);
            },
        });
    });
}

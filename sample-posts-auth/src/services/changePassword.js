import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function changePassword({ accessToken, oldPassword, newPassword}) {
    const user = new CognitoUser({
        Username: 'patrick.mediodia@phitopolis.com',
        Pool: userpool
      });

    return new Promise((resolve, reject) => {
        try {
                user.changePassword({
                    AccessToken: accessToken,
                    PreviousPassword: oldPassword,
                    ProposedPassword: newPassword,
                }, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);   
                    }
                })
        } catch(err) {
            reject(err);
        }
    });
};

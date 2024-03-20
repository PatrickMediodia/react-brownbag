import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function changePassword({ user, accessToken, oldPassword, newPassword }) {
    const authUser = new CognitoUser({
        Username: user.username,
        Pool: userpool
    });

    const authDetails = new AuthenticationDetails({
        Username: user.username,
        Password: oldPassword
    });

    return new Promise((resolve, reject) => {
        try {
            authUser.authenticateUser(authDetails,{
                onSuccess: (result) => {
                    //console.log(`Authenticated ${JSON.stringify(result)}`);

                    authUser.changePassword(
                        oldPassword,
                        newPassword,
                        (err, res) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(res);
                            }
                        }
                    )

                    //resolve(result);
                },
                onFailure: (err) => {
                    reject(err);
                }
            });

            //console.log(`This is the user ${JSON.stringify(user.getCurrentUser())}`);
        } catch(err) {
            console.log('im just');
            reject(err);
        }
    });
};

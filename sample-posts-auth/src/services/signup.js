import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userpool from './userpool';

export default function signup({ email, password }) {
    const atrribute = new CognitoUserAttribute({
        Name: 'email',
        Value: email,
    });
    const attributeList = [atrribute];

    return new Promise((resolve, reject) => {
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
        });
    });
};

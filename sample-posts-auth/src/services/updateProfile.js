import getUser from './getUser';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default function updateProfile({ email, given_name, middle_name, family_name, phone_number, birthdate, address }) {
    return new Promise((resolve, reject) => {
        const currentUser = getUser();
        
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email,
            }),
            new CognitoUserAttribute({
                Name: 'given_name',
                Value: given_name,
            }),
            new CognitoUserAttribute({
                Name: 'middle_name',
                Value: middle_name,
            }),
            new CognitoUserAttribute({
                Name: 'family_name',
                Value: family_name,
            }),
            new CognitoUserAttribute({
                Name: 'phone_number',
                Value: phone_number,
            }),
            new CognitoUserAttribute({
                Name: 'birthdate',
                Value: birthdate,
            }),
            new CognitoUserAttribute({
                Name: 'address',
                Value: address,
            }),
        ];

        currentUser.updateAttributes(
            attributeList,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            }
        );
    });
};

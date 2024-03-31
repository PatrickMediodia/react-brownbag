import { getUser } from './userpool';

export default function changePassword({ oldPassword, newPassword }) {
    return new Promise((resolve, reject) => {
        const currentUser = getUser();
        
        currentUser.changePassword(
            oldPassword,
            newPassword,
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

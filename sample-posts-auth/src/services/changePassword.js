import userpool from './userpool';

export default function changePassword({ oldPassword, newPassword }) {
    const currentUser = userpool.getCurrentUser();

    return new Promise((resolve, reject) => {
        currentUser.getSession((err, res)=> {
            if (err) reject(err);
        });

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

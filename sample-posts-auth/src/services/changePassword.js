export default function changePassword({ user, oldPassword, newPassword }) {
    return new Promise((resolve, reject) => {
        try {
            user.changePassword(
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
        } catch(err) {
            reject(err);
        }
    });
};

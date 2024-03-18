import userpool from './userpool';

export default function confirmSignUp({ username, confirmationCode }) {
  return new Promise((resolve, reject) => {
    try {
        const signUpEvent = userpool.confirmRegistration(
          confirmationCode,
          true,
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
        resolve(signUpEvent);
    } catch (err) {
        console.log(err);
        reject(err);
    }
  });
};

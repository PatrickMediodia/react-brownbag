import userpool from './userpool';

export default function confirmSignup({ username, confirmationCode }) {
  return new Promise((resolve, reject) => {
    try {
        const signUpEvent = userpool.ConfirmSignUp({
            Username: username,
            ClientId: import.meta.env.VITE_APP_CLIENT_ID,
            confirmationCode: confirmationCode,
        });
        resolve(signUpEvent);
    } catch (err) {
        reject(err);
    }
  });
};

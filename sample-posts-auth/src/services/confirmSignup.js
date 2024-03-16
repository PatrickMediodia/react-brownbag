import userpool from './userpool';

export default function signup({ username }) {
  return new Promise((resolve, reject) => {
    try {
        const signUpEvent = userpool.ConfirmSignUp({
            Username: username,
            ClientId: import.meta.env.VITE_APP_CLIENT_ID,
        });
        resolve(signUpEvent);
    } catch (err) {
        reject(err);
    }
  });
};

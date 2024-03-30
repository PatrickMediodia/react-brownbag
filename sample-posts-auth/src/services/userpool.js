import { CognitoUserPool } from 'amazon-cognito-identity-js';

const userPoolData = new CognitoUserPool({
  UserPoolId: import.meta.env.VITE_USER_POOL_ID,
  ClientId: import.meta.env.VITE_APP_CLIENT_ID,
});

export function getUser() {
  const currentUser = userPoolData.getCurrentUser();
  currentUser.getSession((err, res)=> {
    if (err) reject(err);
  });
  return currentUser;
}

export default userPoolData;

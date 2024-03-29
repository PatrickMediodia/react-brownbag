import { CognitoUserPool } from 'amazon-cognito-identity-js';

const userPoolData = new CognitoUserPool({
  UserPoolId: import.meta.env.VITE_USER_POOL_ID,
  ClientId: import.meta.env.VITE_APP_CLIENT_ID,
});

export default userPoolData;

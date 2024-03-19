import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: import.meta.env.VITE_USER_POOL_ID,
  ClientId: import.meta.env.VITE_APP_CLIENT_ID,
};

const userPoolData = new CognitoUserPool(poolData)
console.log(userPoolData);

export default userPoolData;
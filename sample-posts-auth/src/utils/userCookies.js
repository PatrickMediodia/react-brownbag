import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: '/' });
const key = 'jwt';

export function setCookies(userData) {
    const jwtExpiryTime = userData.signInUserSession.accessToken.payload.exp * 1000;
    const currentTime = new Date().getTime();
    const expiryTime = jwtExpiryTime - currentTime;

    const jwt = userData.signInUserSession.accessToken.jwtToken;
    cookies.set(key, jwt, { maxAge:  expiryTime });
    console.log(cookies.get('jwt'));
}

export function getCookies() {
    return cookies.get(key);
}

export function removeCookies() {
    cookies.remove(key);
}

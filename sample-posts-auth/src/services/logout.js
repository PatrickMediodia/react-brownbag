import { getUser } from './userpool';

export default async function logout() {
    const currentUser = getUser();
    currentUser.signOut();
};
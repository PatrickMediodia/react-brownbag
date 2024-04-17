import getUser from "./getUser";

export default async function logout() {
    const currentUser = getUser();
    currentUser.signOut();
};
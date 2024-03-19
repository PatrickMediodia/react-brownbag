import userpool from './userpool';

export default async function logout() {
    const user = await userpool.getCurrentUser();
    user.signOut();
    alert('User has been signed out');
};
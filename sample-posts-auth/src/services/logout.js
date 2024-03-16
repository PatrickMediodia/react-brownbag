import userpool from './userpool';

export default logout = async () => {
    const user = await userpool.getCurrentUser();
    user.signOut();
    console.log("user signed out",err);
};
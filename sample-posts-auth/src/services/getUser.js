import userPoolData from "./userpool";

export function getUser() {
    const currentUser = userPoolData.getCurrentUser();

    currentUser.getSession((err, res)=> {
        if (err) throw err;
    });

    console.log(currentUser);

    return currentUser;
}

export default getUser;

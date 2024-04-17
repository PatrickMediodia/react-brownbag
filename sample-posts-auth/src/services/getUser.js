import userPoolData from "./userpool";
import { setCookies } from "../utils/userCookies";

export function getUser() {
    const currentUser = userPoolData.getCurrentUser();

    currentUser.getSession((err, res)=> {
        if (err) throw err;
    });
    
    return currentUser;
}

export default getUser;

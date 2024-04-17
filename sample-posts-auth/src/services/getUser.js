import userPoolData from "./userpool";

function getUser() {
    const currentUser = userPoolData.getCurrentUser();
    currentUser.getSession((err, res) => {
        if (err) throw err;
    });
    return currentUser;
}

export function getUserAttributes() {
    return new Promise((resolve, reject) => {
        const currentUser = getUser();

        currentUser.getUserAttributes(function (err, res) {
            if (err) reject(err);
    
            let user_attribute_object = {}
            res.forEach((attribute) => {
                user_attribute_object[attribute.Name] = attribute.Value
            });
            resolve(user_attribute_object);
        })
    });
}

export default getUser;

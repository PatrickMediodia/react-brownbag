import userpool from './userpool';

export default function currentUser() {
    const user = userpool.getCurrentUser();
    const userSession = user.getSession((err, res)=> {
        if (err) reject(err);
      });
      console.log(userSession);
    return userSession;
}


import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect,useRef } from 'react';
import { getCookies } from '../utils/manageUserCookies';

const UserProvider = (props) => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
            const jwt = getCookies();
            if (jwt !== undefined) {     
                setUser(jwt);
                console.log(`Kept User Session: ${jwt}`)      
            } else {
                navigate('/login');
            }
        }
        isMounted.current = true;
    }, []);
    
    return (
        <>
            {isMounted ? props.children : undefined}
        </>
    );
};

export default UserProvider;

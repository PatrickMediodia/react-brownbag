import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';
import { getCookies } from '../utils/userCookies';
import { useContext, useEffect, useRef } from 'react';

export default function ProtectedRoute(props) {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const [user, setUser] = useContext(UserContext);
    
    useEffect(() => {
        if (user === null) {
            const jwt = getCookies();
            if (jwt !== undefined) {     
                setUser(jwt);
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

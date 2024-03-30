import Cookies from 'universal-cookie';
import userpool from '../services/userpool';
import { UserContext } from './UserProvider';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProvider = (props) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        const currentUser = userpool.getCurrentUser();
        if (user === null || currentUser === null) {
            const jwt = cookies.get('jwt');
            if (jwt !== undefined) {     
                setUser(jwt);
                console.log(`Kept User Session: ${jwt}`)      
            } else {
                navigate('/login');
            }
        }
    }, []);

    return (
        <>
            {props.children}
        </>
    );
};

export default UserProvider;

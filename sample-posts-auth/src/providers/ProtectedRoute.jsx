import Cookies from 'universal-cookie';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';

const UserProvider = (props) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
            const jwt = cookies.get('jwt');
            if (jwt) {     
                setUser(jwt);        
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

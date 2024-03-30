import Cookies from 'universal-cookie';
import { useContext, useLayoutEffect } from 'react';
import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';

const UserProvider = (props) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useLayoutEffect(()=> {
        if (user === null) {
            const jwt = cookies.get('jwt');
            if (jwt !== undefined) {     
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

import { useContext, useEffect } from 'react';
import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';
const UserProvider = (props) => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
    }, []);
    
    return (
        <>
            {props.children}
        </>
    );
};

export default UserProvider;

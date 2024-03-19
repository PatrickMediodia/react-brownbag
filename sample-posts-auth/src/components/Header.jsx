import { Link, useNavigate } from "react-router-dom";
import logout from "../services/logout";

export default function Header({ user, setUser }) {
    const logoutHandler = () => {
        logout();
        setUser(null);
    };
    
    return (
        <header>
             <ul>
                { user &&
                    <>
                        <li>Home</li>
                        <li>Posts</li>
                        <li>Profile</li>
                    </>
                }
                <li className="right-align">
                    <Link 
                        to={user ? '/' : '/login'} 
                        className="form-link"
                        onClick={logoutHandler}
                    >
                        {user ? 'Logout' : 'Login'}
                    </Link>
                </li>
            </ul> 
        </header>
    );
}

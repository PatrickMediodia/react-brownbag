import { useContext } from "react";
import { Link } from "react-router-dom";
import logout from "../services/logout";
import { UserContext } from "../providers/UserProvider";
import { removeCookies } from "../utils/userCookies";

export default function Header() {
    const [user, setUser] = useContext(UserContext);

    const logoutHandler = () => {
        logout();
        setUser(null);
        removeCookies();
        alert('Account has been signed out');
    };
    
    return (
        <header>
             <ul>
                <li><Link to='/' className="link">Home</Link></li>
                <li>{user && <Link to='/posts' className="link">Posts</Link>}</li>
                <li className="right-align">
                    { user ? <Link 
                        to='/profile' 
                        className="form-link"
                    >
                        Profile
                    </Link> : undefined
                    }
                    <Link 
                        to={user ? '/' : '/login'} 
                        className="form-link"
                        onClick={user ? logoutHandler : undefined}
                    >
                        {user ? 'Logout' : 'Login'}
                    </Link>
                </li>
            </ul> 
        </header>
    );
}

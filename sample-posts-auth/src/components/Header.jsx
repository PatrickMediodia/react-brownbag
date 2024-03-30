import { useContext } from "react";
import Cookies from "universal-cookie";
import logout from "../services/logout";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export default function Header() {
    const cookies = new Cookies();
    const [user, setUser] = useContext(UserContext);

    const logoutHandler = () => {
        cookies.remove('jwt');
        logout();
        setUser(null);
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

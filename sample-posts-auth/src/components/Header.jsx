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
                    { user ? <Link 
                        to='/changepassword' 
                        className="form-link"
                    >
                        Change Password
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

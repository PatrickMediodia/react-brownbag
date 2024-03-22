import { useContext } from "react";
import { Link } from "react-router-dom";
import logout from "../services/logout";
import { UserContext } from "../providers/UserProvider";

export default function Header() {
    const [user, setUser] = useContext(UserContext);

    const logoutHandler = () => {
        logout();
        alert('Account has been signed out');
        navigate('/');
        setUser(null);
    };
    
    return (
        <header>
             <ul>
                { user &&
                    <>
                        <li>Home</li>
                        <Link to='/' className="link">Posts</Link>
                    </>
                }
                <li className="right-align">
                    { user ? <Link 
                        to='/profile' 
                        className="form-link"
                    >
                        Profile
                    </Link> : undefined
                    }
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

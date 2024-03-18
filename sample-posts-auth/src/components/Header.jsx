import { Link, useNavigate } from "react-router-dom";

export default function Header({ user }) {
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
                    >
                        {user ? 'Logout' : 'Login'}
                    </Link>
                </li>
            </ul> 
        </header>
    );
}

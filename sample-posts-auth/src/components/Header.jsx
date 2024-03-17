export default function Header({ user, loginHandler }) {
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
                    <a onClick={loginHandler}>
                        {user ? 'Logout' : 'Login'}
                    </a>
                </li>
            </ul> 
        </header>
    );
}
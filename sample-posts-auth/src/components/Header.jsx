export default function Header({ isLoggedIn, loginHandler }) {
    return (
        <header>
             <ul>
                { isLoggedIn &&
                    <>
                        <li>Home</li>
                        <li>Posts</li>
                        <li>Profile</li>
                    </>
                }
                <li className="right-align">
                    <a onClick={loginHandler}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </a>
                </li>
            </ul> 
        </header>
    );
}
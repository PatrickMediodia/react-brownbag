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
                    <a onClick={()=>{}}>
                        {user ? 'Logout' : 'Login'}
                    </a>
                </li>
            </ul> 
        </header>
    );
}

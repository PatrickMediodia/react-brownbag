import { useState, useContext } from "react";
import authenticate from "../services/authenticate";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { setCookies } from "../utils/manageUserCookies";

export default function Login() {
    const navigate = useNavigate();
    const setUser = useContext(UserContext)[1];

    const [loginCredentials, setLoginCredetials] = useState({ 
        email: '', 
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setLoginCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }
    
    const handleException = (err) => {
        switch(err) {
            case 'UserNotConfirmedException':
                navigate('/confirmsignup', {
                    state: { username: loginCredentials.email }
                });
                break;
            case 'InvalidParameterException':
                alert('Please enter a valid username and password');
                break;
            case 'NotAuthorizedException':
                alert('Incorrect username or password.');
                break;
            default:
                alert(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await authenticate(loginCredentials);
            setCookies(userData);
            setUser(userData.signInUserSession.accessToken.jwtToken);
            navigate('/posts');
        } catch(err) {
            console.log(err);
            handleException(err.name);
        }
    }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-header">Login</h1>
            <div className="form-field">
                Email
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={loginCredentials.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                Password
                <input
                    className="form-input"
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    value={loginCredentials.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        checked={showPassword}
                        onChange={()=>setShowPassword((prev)=>!prev)}
                    />
                    Show Password
                </div>
                <Link to='/forgotpassword' className="form-link">Forgot Password?</Link>
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
            <div className="form-link">
                Don't have an account?&nbsp;
                <Link to='/signup' className="form-link">Sign Up</Link>
            </div>
        </form>
    );
}

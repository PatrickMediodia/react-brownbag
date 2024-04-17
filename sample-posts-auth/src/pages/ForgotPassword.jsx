import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import forgotPassword from '../services/forgotPassword';

export default function ConfirmSignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleException = (err) => {
        switch(err) {
            default:
                alert(err);
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
            alert('A recovery code has been sent to your email address.');
            navigate('/confirmforgotpassword', {
                state: { username: email }
            });
        } catch(err) {
            console.log(err);
            handleException(err.name);
        }
    }
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form-header">Forgot Password</h1>
            <div className='form-details'>
                Enter your email address <br/>
            </div>
            <div className='form-field'>
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={email}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
            <div className="form-link">
                Remember your password?&nbsp;
                <Link to='/login' className="form-link">Login</Link>
            </div>
        </form>
    );
}

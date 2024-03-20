import { useEffect, useState } from 'react';
import confirmSignup from "../services/confirmSignup";
import resendConfirmSignUp from '../services/resendConfirmSignup';
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmSignUp() {
    const location = useLocation();
    const navigate = useNavigate();
    const [confirmationCode, setConfirmationCode] = useState('');
    
    useEffect(()=> {
        if (location.state === null) {
            navigate('/login');
        }
    }, []);

    const handleChange = (e) => {
        setConfirmationCode(e.target.value);
    }

    const handleException = (err) => {
        switch(err) {
            case 'CodeMismatchException':
                alert('Invalid verification code provided, please try again.');
                break;
            default:
                alert(err);
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await confirmSignup(
                location.state.username,
                confirmationCode
            );
            navigate('/login');
        } catch(err) {
            handleException(err.name);
        }
    }
    
    const handleResend = async (e) => {
        e.preventDefault();
        try {
            await resendConfirmSignUp(location.state.username);
            alert('New confirmation code sent to your email.');
        } catch(err) {
            alert(err);
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form-header">Confirm Sign Up</h1>
            <div className='form-details'>
                Enter confirmation code sent to <br/>
                {location.state === null ? 'Placeholder' : location.state.username}
            </div>
            <div className='form-field'>
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={confirmationCode}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <a onClick={handleResend} className='form-link'>Resend Code</a>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
        </form>
    );
}

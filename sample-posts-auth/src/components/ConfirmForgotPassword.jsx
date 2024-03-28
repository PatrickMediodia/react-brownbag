import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import confirmForgotPassword from '../services/confirmForgotPassword';

export default function ConfirmForgotPassword() {
    const location = useLocation();
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    useEffect(()=> {
        if (location.state === null) {
            navigate('/forgotpassword');
        }
    }, []);

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
            await confirmForgotPassword({
                username: location.state.username,
                verificationCode: verificationCode,
                newPassword: newPassword,
            });
            alert('Password Recovery Successful');
            navigate('/login');
        } catch(err) {
            console.log(err);
            handleException(err.name);
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form-header">Forgot Password</h1>
            <div className='form-details'>
                Enter verification code sent to <br/>
                {location.state === null ? 'Placeholder' : location.state.username}
            </div>
            <div className='form-field'>
                Verification Code:
                <input
                    className="form-input"
                    name='verificationCode'
                    type='text'
                    value={verificationCode}
                    onChange={(e)=>setVerificationCode(e.target.value)}
                    autoComplete="off"
                />
            </div>
            <div className='form-field'>
                New Password: 
                <input
                    className="form-input"
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
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
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
        </form>
    );
}

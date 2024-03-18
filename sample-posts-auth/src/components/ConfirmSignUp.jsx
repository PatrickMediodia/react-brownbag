import { useState } from 'react';
import confirmSignup from "../services/confirmSignup";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmSignUp() {
    const location = useLocation();
    const navigate = useNavigate();

    const [confirmationCode, setConfirmationCode] = useState('');

    if (location.state.username === undefined) {
        navigate('/login');
    }

    const handleChange = (e) => {
        setConfirmationCode(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = location.state.username;

        try {
            const response = await confirmSignup({
                username,
                confirmationCode,
            });
            console.log(response);
        } catch(err) {
            console.log('unable to signup');
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form-header">Confirm Sign Up</h1>
            <div className='form-details'>
                Enter confirmation code sent to <br/> {username}
            </div>
            <div className='form-field'>
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={confirmationCode}
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit"
                className="form-button"
                onClick={handleSubmit}
            />
        </form>
    );
}

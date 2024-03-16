import confirmSignup from "../services/confirmSignup";

export default function ConfirmSignUp({ username }) {
    const [confirmationCode, setConfirmationCode] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setConfirmationCode(e.target.value);
    }

    const handleSubmit = async () => {
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
        <div className="message-container">
            Enter Confirmation Code Sent to Email
            <input
                className="login-input"
                name='email'
                type='text'
                value={loginCredentials.email}
                onChange={handleChange}
            />
            <input 
                type="submit"
                className="login-button"
                onClick={handleSubmit}
            />
        </div>
    );
}

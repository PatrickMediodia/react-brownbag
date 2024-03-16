export default function ConfirmSignUp() {
    const handleChange = (e) => {
        e.preventDefault();

        setLoginCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
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
        </div>
    );
}

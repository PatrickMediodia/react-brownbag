import { Link } from 'react-router-dom';
import userpool from '../services/userpool';

export default function ViewProfile() {
    const currentUser = userpool.getCurrentUser();
    currentUser.getSession((err, res)=> {
        if (err) reject(err);
    });

    const { 
        email, 
        address, 
        phone_number, 
        family_name, 
        given_name, 
        middle_name 
    } = currentUser.signInUserSession.idToken.payload;

    /*
    <div className="pre-body">
        <pre> { JSON.stringify(currentUser, null, 2) } </pre>
    </div>
    */

    return (
        <div className="form">
            <h1 className="form-header">Profile</h1>
            <div className="form-field">
                Email: 
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={email}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-field">
                First Name: 
                <input
                    className="form-input"
                    name='given_name'
                    type='text'
                    value={given_name}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-field">
                Middle Name: 
                <input
                    className="form-input"
                    name='middle_name'
                    type='text'
                    value={middle_name}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-field">
                Last Name: 
                <input
                    className="form-input"
                    name='family_name'
                    type='text'
                    value={family_name}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-field">
                Phone Number: 
                <input
                    className="form-input"
                    name='phone_number'
                    type='text'
                    value={phone_number}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-field">
                Address 
                <input
                    className="form-input"
                    name='address'
                    type='text'
                    value={address.formatted}
                    autoComplete="off"
                    disabled
                />
            </div>
            <div className="form-link">
                <Link to='/changepassword' className="form-link">Edit Profile | </Link>
                <Link to='/changepassword' className="form-link">Change Password</Link>
            </div>
        </div>
    );
}

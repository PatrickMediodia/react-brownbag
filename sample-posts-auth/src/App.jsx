import './App.css';
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { UserContext } from './providers/UserProvider';

import Login from './components/Login';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Message from './components/Message';
import ConfirmSignUp from './components/ConfirmSignUp';
import ChangePassword from './components/ChangePassword';

/*
TODO
  - store logged in user in localStorage
*/

function App() {
  const [user, setUser] = useContext(UserContext);
  
  return (
    <>
      <Header/>
      <div className='content-body'>
        <Routes>
          <Route path="/">
            <Route index element={ user === null ? <Login /> : <Posts />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirmsignup" element={<ConfirmSignUp />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="*" element={<Message message={'Route 404. Not a valid route.'} />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;

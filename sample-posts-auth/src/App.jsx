import './App.css';

import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import Message from './components/Message';

/*
TODO
  - add first page to show in localStorage
  - store logged in user in localStorage
  - change password
*/

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <>
      <Header user={user} setUser={setUser}/>
      <div className='content-body'>
        <Routes>
          <Route path="/">
            <Route index element={ user === null ? <Login setUser={setUser} /> : <Posts />} />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirmsignup" element={<ConfirmSignUp />} />
            <Route path="*" element={<Message message={'Route 404. Not a valid route.'} />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

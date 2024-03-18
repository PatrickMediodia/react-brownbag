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
*/

function App() {
  const navigate = useNavigate();

  const [pageToShow, setPageToShow] = useState('login');
  const [user, setUser] = useState(null);

  // const pageToShowHandler = () => {
  //   switch (pageToShow) {
  //     case 'posts':
  //       return <Posts posts={posts} />;
  //     case 'login':
  //       return <Login />
  //     case 'signup':
  //       return <SignUp />
  //     case 'confirmSignUp':
  //       return <ConfirmSignUp username={'patrick.mediodia@phitopolis.com'} setPageToShow={setPageToShow}/>
  //   }
  // }

  // const loginHandler = () => {
  //   if (user) {
  //     pageToShow('posts')
  //   } else {
  //     pageToShow('login')
  //   }
  // }

  return (
    <>
      <Header user={user}/>
      <div className='content-body'>
        <Routes>
          <Route path="/">
            <Route index element={ user === null ? <Login /> : <Posts />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirmSignUp" element={<ConfirmSignUp />} />
            <Route path="*" element={<Message message={'Not a valid route'} />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App


{/* <div className='content-body'>
{ pageToShowHandler() }
</div> */}

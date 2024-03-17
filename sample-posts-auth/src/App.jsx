import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import getPosts from './utils/getPosts';

/*
TODO
  - add first page to show in localStorage
*/

function App() {
  const [pageToShow, setPageToShow] = useState('login');
  const [user, setUser] = useState(null);

  const pageToShowHandler = () => {
    switch (pageToShow) {
      case 'posts':
        return <Posts posts={posts} />;
      case 'login':
        return <Login />
      case 'signUp':
        return <SignUp />
      case 'confirmSignUp':
        return <ConfirmSignUp username={loginCredentials.email} setPageToShow={setPageToShow}/>
    }
  }

  const loginHandler = () => {
    if (user) {
      pageToShow('posts')
    } else {
      pageToShow('login')
    }
  }

  return (
    <>
      <Header 
        user
        loginHandler
      />
      <div className='content-body'>
        { pageToShowHandler() }
      </div>
      <Footer />
    </>
  )
}

export default App

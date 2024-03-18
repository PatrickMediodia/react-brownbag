import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';

/*
TODO
  - add first page to show in localStorage
  - store logged in user in localStorage
*/

function App() {
  const [pageToShow, setPageToShow] = useState('signup');
  const [user, setUser] = useState(null);

  const pageToShowHandler = () => {
    switch (pageToShow) {
      case 'posts':
        return <Posts posts={posts} />;
      case 'login':
        return <Login />
      case 'signup':
        return <SignUp />
      case 'confirmSignUp':
        return <ConfirmSignUp username={'patrick.mediodia@phitopolis.com'} setPageToShow={setPageToShow}/>
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

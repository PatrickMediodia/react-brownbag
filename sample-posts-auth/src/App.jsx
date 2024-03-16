import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

import getPosts from './utils/getPosts';

/*
TODO
  - add first page to show in localStorage
*/

// const pages = {
//   'posts' : ,
//   'login' :,
//   'signup' :,
//   'confirmSignUp' : ,
// };

function App() {
  const [ loginCredentials, setLoginCredetials] = useState({ 
    email: '', 
    password: ''
  });

  const handleChange = (e) => {
      setLoginCredetials((prev) => {
          return {
              ...prev,
              [e.target.name]: e.target.value,
          }
      });
  }
  
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [pageToShow, setPageToShow] = useState('login');

  const loginHandler = () => {
    setIsLoggedIn(prevState => !prevState);
  }

  useEffect(() => {
    if (isLoggedIn) {
      const getPostsAsync = async () => {
        setPosts(await getPosts());
      };
      getPostsAsync();
    } else {
      setPosts([]);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header 
        isLoggedIn={isLoggedIn} 
        loginHandler={loginHandler}
      />
      <div className='content-body'>
        { 
          posts.length > 0 ? 
            <Posts posts={posts}/> :
            <Login />
        }
      </div>
      <Footer />
    </>
  )
}

export default App

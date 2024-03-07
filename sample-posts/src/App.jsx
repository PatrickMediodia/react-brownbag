import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

import getPosts from './utils/getPosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      { posts.length > 0 ? <Posts posts={posts}/> : <p>Please Login to View Posts</p> }
      <Footer />
    </>
  )
}

export default App

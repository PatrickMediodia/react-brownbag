import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

import getPosts from './utils/getPosts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsAsync = async () => {
       setPosts(await getPosts());
    };
    getPostsAsync();
  });

  return (
    <>
      <Header />
      <Posts posts={posts}/>
      <Footer />
    </>
  )
}

export default App

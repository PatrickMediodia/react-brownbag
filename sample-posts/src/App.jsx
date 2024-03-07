import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

import getPosts from './utils/getPosts';

const getPostAsync = async () => {
  return getPosts();
};

function App() {
  const [posts, setPosts] = useState([]);

  useState(async () => 
    setPosts(await getPostAsync())
  , []);
  
  return (
    <>
      <Header />
      <Posts posts={posts}/>
      <Footer />
    </>
  )
}

export default App

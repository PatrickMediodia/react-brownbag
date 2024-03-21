import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import getPosts from '../utils/getPosts';
import { UserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsAsync = async () => {
            setPosts(await getPosts());
        };
        getPostsAsync();
    }, []);
    
    return (
        <div className="posts-container">
            { posts.map((post) => 
                <Post 
                    postData={post} 
                    key={post.id} 
                />
            )}
        </div>
    );
}

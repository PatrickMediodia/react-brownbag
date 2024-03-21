import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import getPosts from '../utils/getPosts';
import { UserContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        const getPostsAsync = async () => {
            setPosts(await getPosts());
        };
        getPostsAsync();
    }, [user]);
    
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

import { useEffect } from "react";
import Post from "./Post";

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

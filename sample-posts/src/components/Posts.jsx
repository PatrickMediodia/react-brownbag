import Post from "./Post";

export default function Posts({ posts }) {
    return (
        <div className="posts-container">
            { posts.map((post) => <Post postData={post} key={post.id} />) }
        </div>
    );
}

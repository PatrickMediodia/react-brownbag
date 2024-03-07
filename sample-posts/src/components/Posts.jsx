import Post from "./Post";

export default function Posts({ posts }) {
    return (
        <>
            {posts.map((post) => <Post postData={post} key={post.id} />)}
        </>
    );
}

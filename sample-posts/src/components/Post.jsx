export default function Post({ postData }) {
    const { title, body } = postData;

    return (
        <div>
            <p>Title: {title}</p>
            <p>Description: {body}</p>
        </div>
    );
}

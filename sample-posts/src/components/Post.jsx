export default function Post({ postData }) {
    const { title, content, image, status, category, publishedAt } = postData;

    return (
        <div className="post">
            <p>{title}</p>
            <hr/>
            <p>{content}</p>
            <img src={image} className="post-image" />
        </div>
    );
}

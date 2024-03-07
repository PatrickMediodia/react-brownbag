export default function Post({ postData }) {
    const { title, content, publishedAt, image } = postData;

    return (
        <div className="post">
            <h4>{title}</h4>
            <p>{publishedAt}</p>
            <hr/>
            <p>{content}</p>
            <img src={image} className="post-image" />
        </div>
    );
}

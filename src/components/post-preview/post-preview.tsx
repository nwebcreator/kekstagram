import Post from "../../types/post";

type PostPreviewProps = {
    post: Post;
}

const PostPreview = ({ post }: PostPreviewProps): JSX.Element => {
    return (
        <a href="#" className="picture">
            <img className="picture__img" src={post.url} width="182" height="182" alt="Случайная фотография" />
            <p className="picture__info">
                <span className="picture__comments">{post.comments.length}</span>
                <span className="picture__likes">{post.likes}</span>
            </p>
        </a>);
}

export default PostPreview;
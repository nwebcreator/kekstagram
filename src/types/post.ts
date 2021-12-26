import Comment from './comment';

type Post = {
    id: number;
    url: string;
    likes: number;
    comments: Comment[];
}

export default Post;
import Comment from './comment';

type Post = {
    id: number;
    url: string;
    likes: number;
    description: string;
    comments: Comment[];
}

export default Post;
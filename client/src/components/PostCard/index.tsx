// Type
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>
        {post.content.map((paragraph) =>
          paragraph.children.map((text) => <p>{text.text}</p>)
        )}
      </p>
    </article>
  );
};

export default PostCard;

// Service
import { getPost } from "@/services/postServices";

interface PostProps {
  params: Promise<{ slug: string }>;
}

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;
  const post = await getPost(`&filters[slug][$eq]=${slug}`);

  return (
    <div>
      <p>{post?.title}</p>
    </div>
  );
};

export default Post;

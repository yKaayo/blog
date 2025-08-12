// Service
import { getPosts } from "@/services/postServices";

// Component
import PostCard from "@/components/PostCard";

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;

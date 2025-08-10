// Service
import { getPosts } from "@/services/postServices";

const Home = async () => {
  const posts = await getPosts();

  return (
    <div className="">
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Home;

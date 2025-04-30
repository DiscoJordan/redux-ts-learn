import { Post } from "../features/PostsSlice";
import PostCard from "./PostCard";

type ListOfPostsProps = {
  posts: Post[];
};

const ListOfPosts = ({ posts }: ListOfPostsProps) => {
  return (
    <>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <li>
            <PostCard post={post} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListOfPosts;

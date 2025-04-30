import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Post, removePost } from "../features/PostsSlice";
import { selectUsers } from "../features/usersSlice";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  return (
    <div
      style={{
        margin: 5,
        padding: 5,
        border: "solid 1px gray",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <h4>{post.title}</h4>
            <p style={{ color: "gray" }}>
              {users.find((user) => user.id === post.userId)?.name}
            </p>
          </div>
          <p>Phone: {post.body}</p>
        </div>
        <button onClick={() => dispatch(removePost(post.id))}>
          Delete post
        </button>
      </div>
    </div>
  );
};

export default PostCard;

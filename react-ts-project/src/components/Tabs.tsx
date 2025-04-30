import { useState } from "react";
import ListOfUsers from "./ListOfUsers";
import CreateUserForm from "./CreateUserForm";
import { useAppSelector } from "../app/hooks";
import { selectUsers } from "../features/usersSlice";
import ListOfPosts from "./ListOfPosts";
import { selectPosts } from "../features/PostsSlice";

const Tabs = () => {
  const users = useAppSelector(selectUsers);
  const posts = useAppSelector(selectPosts);
  const [tab, setTab] = useState("users");
  return (
    <div style={{ width: "1280px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <h2
          style={{
            cursor: "pointer",
            color: tab === "users" ? "blue" : "gray",
          }}
          onClick={() => setTab("users")}
        >
          Users
        </h2>
        <h2
          style={{
            cursor: "pointer",
            color: tab === "posts" ? "blue" : "gray",
          }}
          onClick={() => setTab("posts")}
        >
          Posts
        </h2>
        <h2
          style={{
            cursor: "pointer",
            color: tab === "createUser" ? "blue" : "gray",
          }}
          onClick={() => setTab("createUser")}
        >
          Create New User
        </h2>
      </div>

      <div>
        {tab === "users" && <ListOfUsers users={users} />}
        {tab === "posts" && <ListOfPosts posts={posts} />}
        {tab === "createUser" && <CreateUserForm />}
      </div>
    </div>
  );
};

export default Tabs;

import { useState } from "react";
import ListOfUsers from "./ListOfUsers";
import CreateUserForm from "./CreateUserForm";
import { useAppSelector } from "../app/hooks";
import { selectUsers } from "../features/userSlice";

const UserTabs = () => {
  const users = useAppSelector(selectUsers);
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
            color: tab === "createUser" ? "blue" : "gray",
          }}
          onClick={() => setTab("createUser")}
        >
          Create New User
        </h2>
      </div>

      <div>
        {tab === "users" ? <ListOfUsers users={users} /> : <CreateUserForm />}
      </div>
    </div>
  );
};

export default UserTabs;

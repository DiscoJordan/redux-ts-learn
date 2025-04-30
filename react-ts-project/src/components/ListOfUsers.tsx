import type { User } from "../features/usersSlice";
import UserCard from "./UserCard";

type ListOfUsersProps = {
  users: User[];
};

const ListOfUsers = ({ users }: ListOfUsersProps) => {
  return (
    <>
      <h1>Users</h1>
      <ol>
        {users.map((user) => (
          <li>
            <UserCard user={user} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListOfUsers;

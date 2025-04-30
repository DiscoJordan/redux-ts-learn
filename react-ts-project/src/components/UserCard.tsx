import { useAppDispatch } from "../app/hooks";
import { removeUser, User } from "../features/usersSlice";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const dispatch = useAppDispatch();
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
            <h4>{user.name}</h4>
            <p style={{ color: "gray" }}>@{user.username}</p>
          </div>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
        </div>
        <div>
          {user.address && (
            <ul>
              <strong>Adress</strong>
              <li>{user.address.city}</li>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.zipcode}</li>
            </ul>
          )}
        </div>
        <button onClick={() => dispatch(removeUser(user.id))}>
          Delete user
        </button>
      </div>
    </div>
  );
};

export default UserCard;

import { useState } from "react";
import { addUser } from "../features/usersSlice";
import { useAppDispatch } from "../app/hooks";
import { v4 as uuidv4 } from "uuid";

const CreateUserForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    username: "",
    email: "",
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser({ ...userInfo, id: uuidv4() }));
    setUserInfo({
      name: "",
      surname: "",
      phone: "",
      username: "",
      email: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          value={userInfo.surname}
          onChange={(e) =>
            setUserInfo({ ...userInfo, surname: e.target.value })
          }
          type="text"
          placeholder="surname"
        />
        <input
          value={userInfo.phone}
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          type="text"
          placeholder="phone number"
        />
        <input
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
          type="text"
          placeholder="nickname"
        />
        <input
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          type="text"
          placeholder="email adress"
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default CreateUserForm;

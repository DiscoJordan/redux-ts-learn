import { useEffect } from "react";
import "./App.css";
import UserTabs from "./components/Tabs";
import { useAppDispatch } from "./app/hooks";
import { fetchUsers } from "./features/usersSlice";
import { fetchPosts } from "./features/PostsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <h1>VReduxe</h1>
      <UserTabs />
    </>
  );
}

export default App;

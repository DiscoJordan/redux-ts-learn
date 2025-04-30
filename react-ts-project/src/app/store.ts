import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import postsReducer from '../features/PostsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts:postsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

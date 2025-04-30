import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import axios from "axios";


export interface Post {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}

export type PostsState = {
  postsList: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: PostsState = {
  postsList: [],
  loading: false,
  error: null,
};

const URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPostss", async () => {
  const response = await axios(URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.postsList = state.postsList = [...state.postsList, action.payload];
    },
    removePost: (state, action: PayloadAction<string | number>) => {
      state.postsList = state.postsList = state.postsList.filter(
        (post) => post.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.loading = false), (state.postsList = action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message || "Error");
    });
  },
});
export const { addPost, removePost } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts= (state: RootState) => state.posts.postsList;
export const selectPostsLoading = (state: RootState) => state.posts.loading;

export default postsSlice.reducer;

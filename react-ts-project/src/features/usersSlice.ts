import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import axios from "axios";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
}

export type UsersState = {
    usersList: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  usersList: [],
  loading: false,
  error: null,
};

const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios(URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.usersList = state.usersList = [...state.usersList, action.payload];
    },
    removeUser: (state, action: PayloadAction<string | number>) => {
      state.usersList = state.usersList = state.usersList.filter(
        (user) => user.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false), (state.usersList = action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message || "Error");
    });
  },
});
export const { addUser, removeUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.usersList;
export const selectUsersLoading = (state: RootState) => state.users.loading;

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

// Define a type for the slice state
export interface PostsState {
  posts: Post[];
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
  isAuthenticated: false,
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, setIsAuthenticated } = postsSlice.actions;

export default postsSlice.reducer;

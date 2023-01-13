import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

export interface PostsState {
  posts: Post[];
  isAuthenticated: boolean;
}

const initialState: PostsState = {
  posts: [],
  isAuthenticated: false,
};

export const postsSlice = createSlice({
  name: "posts",
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addPost, deletePost, fetchPosts } from "./posts.action";
import { InitialPostsStore, IPost, ReturnPosts } from "./posts.interface";

const initialState: InitialPostsStore = {
  posts: [],
  isLoading: false,
  errorMessage: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changePost(state, action: PayloadAction<IPost>) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // получение всех статей
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<ReturnPosts>) => {
          state.isLoading = false;
          state.posts = action.payload;
        }
      )
      .addCase(
        fetchPosts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.errorMessage = `${action.payload}`;
        }
      )
      // удаление статьи
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = `${action.payload}`;
      })
      // добавление статьи
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.isLoading = false;
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = `${action.payload}`;
      });
  },
});

export const { changePost } = postsSlice.actions;
export default postsSlice.reducer;

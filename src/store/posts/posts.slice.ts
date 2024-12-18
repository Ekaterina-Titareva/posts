import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts.action";
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
    addNewPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    changePost(state, action: PayloadAction<IPost>) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    },
    deletePost(state, action: PayloadAction<{ id: number }>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<ReturnPosts>) => {
          state.isLoading = false;
          state.posts = action.payload; // Сохраняем полученные посты
        }
      )
      .addCase(
        fetchPosts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.errorMessage = `${action.payload}`; // Сохраняем сообщение об ошибке
        }
      );
  },
});

export const { addNewPost, changePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;

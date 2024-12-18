import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_POSTS } from "@/src/constants/api";
import { ReturnPosts } from "./posts.interface";

export const fetchPosts = createAsyncThunk<
  ReturnPosts,
  void,
  { rejectValue: string }
>("posts/fetch", async (_, { rejectWithValue }) => {
  return new Promise<ReturnPosts>(async (resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(`${FETCH_POSTS}?_limit=15`);
      if (!response.ok) {
        reject(rejectWithValue("Произошла ошибка при загрузке постов"));
      } else {
        const posts: ReturnPosts = await response.json();
        resolve(posts);
      }
    }, 2000);
  });
});

// export const fetchPosts = createAsyncThunk<
//   ReturnPosts,
//   void,
//   { rejectValue: string }
// >("posts/fetch", async (_, { rejectWithValue }) => {
//     const response = await fetch(FETCH_POSTS);
//     if (!response.ok) {
//       return rejectWithValue("Произошла ошибка при загрузке постов");
//     }
//     const posts: ReturnPosts = await response.json();
//     return posts;
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_POSTS } from "@/src/constants/api";
import { IPost, ReturnPosts } from "./posts.interface";

export const fetchPosts = createAsyncThunk<
  ReturnPosts,
  void,
  { rejectValue: string }
>("posts/fetch", async (_, { rejectWithValue }) => {
  return new Promise<ReturnPosts>(async (resolve, reject) => {
    try {
      const response = await fetch(FETCH_POSTS);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return resolve(data);
    } catch (error) {
      console.error("Fetch error:", error);
      throw reject(rejectWithValue("Произошла ошибка при загрузке статей"));
    }
  });
});

export const deletePost = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("post/delete", async (id, { rejectWithValue }) => {
  return new Promise<number>(async (resolve, reject) => {
    const response = await fetch(`${FETCH_POSTS}${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      reject(rejectWithValue("Произошла ошибка при удалении статьи"));
    } else {
      resolve(id);
    }
  });
});

export const addPost = createAsyncThunk<IPost, IPost, { rejectValue: string }>(
  "post/add",
  async (post, { rejectWithValue }) => {
    return new Promise<IPost>(async (resolve, reject) => {
      const response = await fetch(`${FETCH_POSTS}`, {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          body: post.body,
          userId: post.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        reject(rejectWithValue("Произошла ошибка при добавлении статьи"));
      } else {
        const addedPost = await response.json();
        resolve(addedPost);
      }
    });
  }
);

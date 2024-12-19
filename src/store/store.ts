import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/posts.slice";
import userSlice from "./user/user.slice";

const rootReducer = combineReducers({
  posts: postsSlice,
  user: userSlice,
});

export type TypeRootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;

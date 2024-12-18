import { useMemo } from "react";
import { postsSlice } from "../store/posts/posts.slice";
import { useTypedSelector } from "../store/useTypedSelector";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const usePosts = () => useTypedSelector((state) => state.posts);

const postActions = postsSlice.actions;

export const usePostsActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(postActions, dispatch), [dispatch]);
};

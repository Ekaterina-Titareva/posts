import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../store/user/user.slice";
import { useTypedSelector } from "../store/useTypedSelector";

export const useAuth = () => useTypedSelector((state) => state.user);

const userActions = userSlice;

export const useUserActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(userActions, dispatch), [dispatch]);
};

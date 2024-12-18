import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { loginUser, registrationUser } from "./user.action";
import { InitialUserStore, ReturnUser } from "./user.interface";

const getStoreCookie = (name: string) => {
  const item = Cookies.get(name);
  return item ? JSON.parse(item) : null;
};

const initialState: InitialUserStore = {
  user: getStoreCookie("user"),
  isLoading: false,
  errorMessage: "",
};

const handlePending = (state: InitialUserStore) => {
  console.log("pending");
  state.isLoading = true;
  state.errorMessage = "";
};

const handleFulfilled = (
  state: InitialUserStore,
  action: PayloadAction<ReturnUser>
) => {
  console.log("fulfilled");
  state.isLoading = false;
  state.user = action.payload;
};

const handleRejected = (
  state: InitialUserStore,
  action: PayloadAction<string | undefined>
) => {
  console.log("rejected");
  state.isLoading = false;
  state.errorMessage = `${action.payload}`;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, handlePending)
      .addCase(registrationUser.fulfilled, handleFulfilled)
      .addCase(registrationUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(loginUser.rejected, handleRejected);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

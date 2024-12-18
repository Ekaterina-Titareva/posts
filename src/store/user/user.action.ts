import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { PropsUserAsyncThunk, ReturnUser } from "../user/user.interface";

// createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>()
// - Returned – тип возвращаемого санком значения
// - ThunkArg – тип аргумента санка
// - ThunkApiConfig – тип конфига, его разберем ниже

export const loginUser = createAsyncThunk<
  ReturnUser,
  PropsUserAsyncThunk,
  { rejectValue: string }
>("users/login", async ({ email, password }, { rejectWithValue }) => {
  return new Promise<ReturnUser>((resolve, reject) => {
    setTimeout(() => {
      console.log("tyt");
      if (email === "test@example.com" && password === 123456) {
        console.log("ok");
        resolve({ email: "test@example.com", password: 123456 });
      } else {
        console.log("err");
        reject(rejectWithValue("User not found"));
      }
    }, 2000);
  });
});

export const registrationUser = createAsyncThunk<
  ReturnUser,
  PropsUserAsyncThunk,
  { rejectValue: string }
>("users/registration", async ({ email, password }, { rejectWithValue }) => {
  return new Promise<ReturnUser>((resolve, reject) => {
    setTimeout(() => {
      console.log("tyt");
      if (email === "test@example.com" && password === 123456) {
        console.log("ok");
        resolve({ email: "test@example.com", password: 123456 });
      } else {
        console.log("err");
        reject(rejectWithValue("User not found"));
      }
    }, 2000);
  });
});

export const logout = createAsyncThunk("user/logout", async () => {
  // тут метод для удаления токенов
  Cookies.remove("user");
});

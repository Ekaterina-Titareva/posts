import * as yup from "yup";

export const yupSchemaRegistration = yup
  .object({
    login: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Логин должен содержать как минимум три буквы/числа/символа"),
    password: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Пароль должен содержать как минимум три буквы/числа/символа"),
    passwordRepeat: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Пароль должен содержать как минимум три буквы/числа/символа")
      .oneOf([yup.ref("password")], "Пароли должны совпадать"),
  })
  .required();

export const yupSchemaLogin = yup
  .object({
    login: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Логин должен содержать как минимум три буквы/числа/символа"),
    password: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Пароль должен содержать как минимум три буквы/числа/символа"),
  })
  .required();

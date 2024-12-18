import * as yup from "yup";

export const yupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат электронной почты")
    .required("Электронная почта обязательна"),
  password: yup
    .number()
    .min(3, "Пароль должен содержать как минимум три цифры")
    .required("Пароль обязателен"),
});

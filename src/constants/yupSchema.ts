import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат электронной почты")
    .required("Электронная почта обязательна"),
  password: yup
    .number()
    .min(3, "Пароль должен содержать как минимум три цифры")
    .required("Пароль обязателен"),
});

export const postSchema = yup.object().shape({
  id: yup.number().required("id обязателен"),
  title: yup.string().required("Заголовок обязателен"),
  body: yup.string().required("Описание обязательно"),
});

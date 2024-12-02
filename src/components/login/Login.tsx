"use client";
import Cookies from "js-cookie";

import { yupSchemaLogin } from "@/src/constants/yupSchema";
import Form, { SubmitProps } from "@/src/ui/form/Form";
import Input from "@/src/ui/input/Input";
import Title from "@/src/ui/title/Title";

const Login = () => {
  const handleSubmit = (data: SubmitProps) => {
    const registrationsJSON = Cookies.get("registrations");
    let foundUser = null;

    if (registrationsJSON) {
      const registrations = JSON.parse(registrationsJSON);

      foundUser = registrations.find(
        (registration: { login: string; password: string }) =>
          registration.login === data.login
      );
    }

    if (foundUser) {
      if (foundUser.password === data.password) {
        alert("Авторизация прошла успешно");
      } else {
        alert("Неверный пароль");
      }
    } else {
      alert("Пользователя с таким логином не существует");
    }
  };

  return (
    <div className="flex w-full h-full  flex-col justify-center items-center">
      <Title title="Вход" />
      <Form handleSubmit={handleSubmit} schema={yupSchemaLogin}>
        <Input label="Логин" name="login" />
        <Input label="Пароль" name="password" />
      </Form>
    </div>
  );
};

export default Login;

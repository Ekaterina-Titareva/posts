"use client";
import Cookies from "js-cookie";

import { yupSchemaRegistration } from "@/src/constants/yupSchema";
import Form, { SubmitProps } from "@/src/ui/form/Form";
import Input from "@/src/ui/input/Input";
import Title from "@/src/ui/title/Title";

const Registration = () => {
  const handleSubmit = (data: SubmitProps) => {
    const registrationsJSON = Cookies.get("registrations");
    const registrations = registrationsJSON
      ? JSON.parse(registrationsJSON)
      : [];
    let foundUser = null;

    if (registrationsJSON) {
      const registrations = JSON.parse(registrationsJSON);

      foundUser = registrations.find(
        (registration: { login: string; password: string }) =>
          registration.login === data.login
      );
    }

    if (foundUser) {
      alert(`Пользователь с таким логином уже существует: ${data.login}`);
    } else {
      const newRegistration = {
        login: data.login,
        password: data.password,
      };

      registrations.push(newRegistration);

      Cookies.set("registrations", JSON.stringify(registrations));
      alert(
        `Регистрация прошла успешно! Логин: ${newRegistration.login}, пароль: ${newRegistration.password}`
      );
    }
  };

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <Title title="Регистрация" />
      <Form handleSubmit={handleSubmit} schema={yupSchemaRegistration}>
        <Input label="Логин" name="login" />
        <Input label="Пароль" name="password" />
        <Input label="Повторите пароль" name="passwordRepeat" />
      </Form>
    </div>
  );
};

export default Registration;

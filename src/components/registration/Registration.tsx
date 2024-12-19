"use client";

import { SubmitHandler } from "react-hook-form";

import useAction from "@/src/hoc/useAction";
import { useAuth } from "@/src/hoc/useAuth";
import { loginSchema } from "@/src/constants/yupSchema";
import { SubmitLoginProps } from "@/src/store/user/user.interface";

import Form from "@/src/ui/form/Form";
import Input from "@/src/ui/input/Input";
import Title from "@/src/ui/title/Title";
import Loading from "@/app/auth/loading";
import Error from "@/app/error";

const Registration = () => {
  const { registrationUser } = useAction();
  const { user, isLoading, errorMessage } = useAuth();

  const onSubmit: SubmitHandler<SubmitLoginProps> = (data) => {
    registrationUser(data);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      {user ? user.email : ""}
      <Title title="Регистрация" />
      <Form onHandleSubmit={onSubmit} schema={loginSchema}>
        <Input label="Почта" name="email" type="email" />
        <Input label="Пароль" name="password" type="number" />
      </Form>
      {errorMessage && <Error />}
    </div>
  );
};

export default Registration;

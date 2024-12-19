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

const Login = () => {
  const { loginUser } = useAction();
  const { isLoading, errorMessage } = useAuth();

  const onSubmit: SubmitHandler<SubmitLoginProps> = (data) => {
    loginUser(data);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <Title title="Вход" />
      <Form onHandleSubmit={onSubmit} schema={loginSchema}>
        <Input label="Почта" name="email" type="email" />
        <Input label="Пароль" name="password" type="number" />
      </Form>
      {errorMessage && <Error />}
    </div>
  );
};

export default Login;

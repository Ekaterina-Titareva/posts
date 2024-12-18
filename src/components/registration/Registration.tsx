"use client";

import Form, { SubmitProps } from "@/src/ui/form/Form";
import Input from "@/src/ui/input/Input";
import Title from "@/src/ui/title/Title";
import useAction from "@/src/hoc/useAction";
import { SubmitHandler } from "react-hook-form";
import { useAuth } from "@/src/hoc/useAuth";
import Loading from "@/app/auth/loading";
import Error from "@/app/error";

const Registration = () => {
  const { registrationUser } = useAction();
  const { isLoading, errorMessage } = useAuth();

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    registrationUser(data);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <Title title="Регистрация" />
      <Form handleSubmit={onSubmit}>
        <Input label="Почта" name="email" type="email" />
        <Input label="Пароль" name="password" type="number" />
      </Form>
      {errorMessage && <Error />}
    </div>
  );
};

export default Registration;

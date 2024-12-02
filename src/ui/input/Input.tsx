import { FC } from "react";
import { FieldErrors, useFormContext } from "react-hook-form";
import * as yup from "yup";

interface InputProps {
  label: string;
  name: "login" | "password" | "passwordRepeat";
}

const Input: FC<InputProps> = ({ label, name }) => {
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await trigger(name);
    setValue(name, event.target.value);
  };
  const typedErrors = errors as FieldErrors<Record<string, any>>;
  return (
    <>
      <label className="block mt-2 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        className="block"
        id={name}
        {...register(name)}
        onChange={(e) => handleChange(e)}
      />
      {typeof typedErrors[name]?.message === "string" && (
        <p className="text-red-500 text-xs w-56 text-wrap ">
          {typedErrors[name].message}
        </p>
      )}
    </>
  );
};

export default Input;

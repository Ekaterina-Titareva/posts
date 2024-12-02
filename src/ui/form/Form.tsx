import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SubmitProps {
  login: string;
  password: string;
}

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  handleSubmit: (data: SubmitProps) => void;
  schema?: yup.AnyObjectSchema | undefined;
}

const Form: FC<PropsWithChildren<FormProps>> = ({
  schema,
  handleSubmit,
  children,
  ...FormHTMLAttributes
}) => {
  const methods = useForm<SubmitProps>({
    resolver: schema ? yupResolver(schema) : undefined,
  });

  const onSubmit = (data: SubmitProps) => {
    handleSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...FormHTMLAttributes}>
        {children}
        <input
          className="mt-3 p-1 border border-black rounded-md hover:shadow-lg hover:shadow-slate-50 bg-orange-400 cursor-pointer"
          type="submit"
        />
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  );
};

export default Form;

"use client";

import useAction from "@/src/hoc/useAction";
import { usePosts } from "@/src/hoc/usePosts";
import { postSchema } from "@/src/constants/yupSchema";
import { SubmitPostProps } from "@/src/store/posts/posts.interface";

import Form from "@/src/ui/form/Form";
import Input from "@/src/ui/input/Input";
import Loading from "./loading";
import Error from "../error";

const CreateProduct = () => {
  const { addPost } = useAction();
  const { isLoading, errorMessage } = usePosts();

  const handleSubmit = (data: SubmitPostProps) => {
    addPost(data);
  };

  if (isLoading) return <Loading />;
  if (errorMessage) return <Error />;
  return (
    <div className="m-12 flex flex-col items-center">
      <div>Добавить статью</div>
      <Form onHandleSubmit={handleSubmit} schema={postSchema}>
        <Input label="id" name="id" type="number" />
        <Input label="Заголовок" name="title" type="text" />
        <Input label="Описание" name="body" type="text" />
      </Form>
    </div>
  );
};

export default CreateProduct;

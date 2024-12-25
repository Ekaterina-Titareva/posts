"use client";

import { IPost } from "@/src/store/posts/posts.interface";

import CustomLink from "@/src/ui/custom-link/CustomLink";
import Title from "@/src/ui/title/Title";

const Post = ({ post }: { post: IPost }) => {
  const { id, title, body } = post;

  return (
    <CustomLink
      href={`${id}`}
      className="post block p-2 max-w-56 border border-orange-500"
    >
      <div data-id={id} className="">
        <p>{id}</p>
        <Title title={title} />
        <p>{body}</p>
      </div>
    </CustomLink>
  );
};

export default Post;

"use client";

import { useEffect } from "react";

import useAction from "@/src/hoc/useAction";
import { usePosts } from "@/src/hoc/usePosts";

import Loading from "./loading";
import Error from "../error";
import Title from "@/src/ui/title/Title";

const Products = () => {
  const { fetchPosts } = useAction();

  const { posts, isLoading, errorMessage } = usePosts();

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.error("Ошибка при загрузке постов:", error);
    }
  }, [fetchPosts]); // fetchPosts ?

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const closestPost = target.closest(".post");

    if (closestPost) {
      const id = closestPost.getAttribute("data-id");
      console.log(`id нажатого поста: ${id}`);
    }
  };

  if (isLoading) return <Loading />;
  if (errorMessage) return <Error />;

  return (
    <div
      onClick={handleClick}
      className="h-[78svh] m-12 p-2 overflow-y-scroll flex flex-row flex-wrap gap-5 text-white border border-slate-600"
    >
      {posts.map((post) => (
        <div
          key={post.id}
          data-id={post.id}
          className="post p-2 max-w-56 border border-orange-500"
        >
          <p>{post.id}</p>
          <Title title={post.title} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

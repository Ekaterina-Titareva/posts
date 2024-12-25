"use client";

import { useEffect } from "react";

import useAction from "@/src/hoc/useAction";
import { usePosts } from "@/src/hoc/usePosts";
import { IPost } from "@/src/store/posts/posts.interface";

import Post from "@/src/components/post/Post";
import Loading from "./loading";
import Error from "../error";

const Posts = () => {
  const { fetchPosts } = useAction();
  // const { fetchPosts, deletePost } = useAction();

  const { posts, isLoading, errorMessage } = usePosts();

  useEffect(() => {
    if (!posts.length) {
      try {
        fetchPosts();
      } catch (error) {
        console.error("Ошибка при загрузке статей:", error);
      }
    }
  }, [fetchPosts, posts]);

  // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const target = event.target as HTMLElement;
  //   const closestPost = target.closest(".post");

  //   if (closestPost) {
  //     const id = closestPost.getAttribute("data-id");
  //     console.log(`выбираем статью: ${id}`);

  //     // deletePost(Number(id));
  //   }
  // };

  if (isLoading) return <Loading />;
  if (errorMessage) return <Error />;
  console.log(posts);
  return (
    <div
      // onClick={handleClick}
      className="h-[78svh] m-12 p-2 overflow-y-scroll flex flex-row flex-wrap gap-5 text-white border border-slate-600"
    >
      {posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

import { postsSlice } from "./posts/posts.slice";
import { deletePost, addPost, fetchPosts } from "./posts/posts.action";
import { loginUser, logout, registrationUser } from "./user/user.action";

const rootAction = {
  ...postsSlice.actions,
  fetchPosts,
  addPost,
  deletePost,
  loginUser,
  registrationUser,
  logout,
};

export default rootAction;

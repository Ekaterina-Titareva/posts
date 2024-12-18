import { postsSlice } from "./posts/posts.slice";
import { fetchPosts } from "./posts/posts.action";
import { loginUser, logout, registrationUser } from "./user/user.action";

const rootAction = {
  ...postsSlice.actions,
  fetchPosts,
  loginUser,
  registrationUser,
  logout,
};

export default rootAction;

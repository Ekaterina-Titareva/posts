export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TPostsState = IPost[];

export type ReturnPosts = TPostsState;

export interface InitialPostsStore {
  posts: TPostsState;
  isLoading: boolean;
  errorMessage: string;
}

export interface SubmitPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

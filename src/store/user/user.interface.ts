export interface IUserState {
  email: string;
  password: number;
}

export type ReturnUser = IUserState;

export type PropsUserAsyncThunk = IUserState;

export interface InitialUserStore {
  user: IUserState | null;
  isLoading: boolean;
  errorMessage: string;
}

export interface SubmitLoginProps {
  email: string;
  password: number;
}

export interface UserData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export type IUser = Omit<UserData, "password"> & { _id: string };

export interface IUser {
  id: string;
  email: string;
  name: string;
  active: boolean;
  roles: string;
}

export interface IUserMutation {
  email: string;
  name: string;
  active: boolean;
  roles: string;
}
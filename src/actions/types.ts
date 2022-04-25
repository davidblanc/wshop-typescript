import { FetchUsersAction, DeleteUserAction } from "../interfaces";

export enum ActionTypes {
  fetchUsers,
  deleteUser
}

export type Action = FetchUsersAction | DeleteUserAction;
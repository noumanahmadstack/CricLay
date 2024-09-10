export interface UserState {
  userData: {
    token?: string;
    success?: boolean;
    errors?: string;
    user?: UserObjProps;
  };
  isDark: boolean;
}
export interface UserObjProps {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  player:{
    avatarUrl?:string,
    shareableId?:string,
    id?:string
  }
}

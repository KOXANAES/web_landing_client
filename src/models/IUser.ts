export interface IUser { 
    id: string;
    username: string;
    email: string;
    isActivated: boolean;
    role: string;
    avatar: string | undefined 
}
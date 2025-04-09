import { IUser } from "../IUser";
import { ITokens } from "../ITokens";

export interface AuthResponse { 
    tokens: ITokens;
    userResponse: IUser;
}
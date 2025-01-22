import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService { 
  static async login(email:string, password:string): Promise<AxiosResponse<AuthResponse>> { 
    return $api.post<AuthResponse>('/auth/login', {email, password})
  }
  static async registration(email:string, password:string, username:string): Promise<AxiosResponse<AuthResponse>> { 
    return $api.post<AuthResponse>('/auth/registration', {email, password, username})
  }
  static async logout(): Promise<void> { 
    return $api.post('/auth/logout')
  }
  static async getApp() { 
    return $api.get('/app-download/androidApp', { responseType: 'blob' });
  }
}
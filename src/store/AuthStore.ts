import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthStore { 
    user =  {} as IUser;
    isAuth = false
    isLoading = false

    constructor() { 
        makeAutoObservable((this))
      }

    setAuth(bool:boolean) { 
    this.isAuth = bool
    }

    setUser(userResponse:IUser) { 
    this.user = userResponse
    }

    setLoading(bool:boolean) { 
    this.isLoading = bool
    }
      
    async login(email:string, password:string) { 
        try { 
        const response = await AuthService.login(email,password)
        localStorage.setItem('token', response.data.tokens.accessToken)
        this.setAuth(true)
        this.setUser(response.data.userResponse)
        } catch (e:any) { 
        throw e
        }
    }

    async registration(email:string, password:string, username:string) { 
        try { 
            const response = await AuthService.registration(email,password, username)
            console.log(response)
            localStorage.setItem('token', response.data.tokens.accessToken)
            this.setAuth(true)
            this.setUser(response.data.userResponse)
        } catch (e:any) { 
            throw e
        }
    }
    
    async logout() { 
        try { 
          const response = await AuthService.logout()
          console.log(response)
          localStorage.removeItem('token')
          this.setAuth(false)
          this.setUser({} as IUser)
        } catch (e:any) { 
          console.log(e.response?.data?.message)
        }
      }

      async checkAuth() { 
        try { 
          this.setLoading(true)
          const response = await axios.get<AuthResponse>(`${import.meta.env.VITE_API_URL}/auth/refresh`, {withCredentials: true})
          console.log(response.data)
          localStorage.setItem('token', response.data.tokens.accessToken)
          this.setAuth(true)
          this.setUser(response.data.userResponse)
        } catch(e:any) { 
          console.log(e.response?.data?.message)
        } finally { 
          this.setLoading(false)
        }
      }

      async getApp() { 
        try { 
            const response = await AuthService.getApp();
            return response;
        } catch(e:any) { 
            console.log(e.response?.data?.message);
            throw e;
        }
    }

}
export interface AuthRequestI {
    username: string;
    password: string;
}



export interface LoginResponse {
    resp_code: string;
    resp_desc: string;
    data: LoginData;
  }
  
  export interface LoginData {
    token: string;
    user: User;
  }
  
  export interface User {
    created_at: string; // ISO 8601 date string
    id: string;
    username: string;
  }
  

  export interface UserCreationResponse {
    resp_code: string;
    resp_desc: string;
    data: null;
  }
  
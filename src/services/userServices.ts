import axios, { type AxiosResponse } from 'axios';
import type { TodosList } from '../pages/todos/todoSlice';
import type { UserState } from '../pages/user/userSlice';

export interface UserAxiosResp {
  errorStatus: boolean;
  result: {
    user?: UserState | null;
    token?: string | null;
    todos?: TodosList[] | null;
    error?: string | null;
  };
}

export interface Payload {
  email: string;
  password: string;
}

export async function signupUser(payload: Payload) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/auth/signup`;
    const response = await axios.post<UserAxiosResp>(url, payload);
    return response.data;
  } catch (error: any) {
    console.error(`Error occured : ${error}`);
    throw error;
  }
}

export async function loginUser(payload: Payload): Promise<UserAxiosResp> {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/auth/login`;
    const response = await axios.post<UserAxiosResp>(url, payload);
    return response.data;
  } catch (error: any) {
    console.error(`Error occured : ${error}`);
    throw error;
  }
}

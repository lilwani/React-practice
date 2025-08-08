import axios from 'axios';
import type { TodosList } from '../pages/todos/todoSlice';

interface AxiosResp {
  errorStatus: boolean;
  data: {
    userId?: number;
    token?: string;
    todos?: TodosList[] | null;
    error?: string;
  };
}

interface Payload {
  email: string;
  password: string;
}

export async function signupUser(payload: Payload) {
  try {
    const url = `${process.env.REACT_APP_API_URL}/api/auth/signup`;
    const response = await axios.post<AxiosResp>(url, payload);
    return response;
  } catch (error: unknown) {
    console.error(`Error occured : ${error}`);
    return error;
  }
}

export async function loginUser(payload: Payload) {
  try {
    const url = `${process.env.REACT_APP_API_URL}/api/auth/login`;
    const response = await axios.post<AxiosResp>(url, payload);
    return response;
  } catch (error: unknown) {
    console.error(`Error occured : ${error}`);
    return error;
  }
}

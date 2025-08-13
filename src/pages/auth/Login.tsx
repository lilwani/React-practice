import React, { type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import type { AppDispatch } from '../../store/store';
import { loginUserThunk } from '../user/userSlice';
import type { Payload } from '../../services/userServices';

interface ILoginIn {
  isSignup: boolean;
  children?: React.ReactNode;
}

export default function Login({ isSignup }: ILoginIn) {
  const dispatch = useDispatch<AppDispatch>();

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data: Payload = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
    };
    dispatch(loginUserThunk(data));
  };

  return (
    <div className="max-w-screen m-4 border-2 rounded-2xl bg-gray-800 grow">
      <form
        className="flex flex-col justify-center m-auto"
        onSubmit={handleLoginSubmit}
      >
        <div className="flex flex-row justify-center gap-6 p-4 ">
          <h2 className="text-2xl">
            <label> Username</label>
          </h2>
          <input
            type="text"
            className=" w-[20%] border-2 rounded-2xl h-10 text-center"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-row justify-center gap-6 p-4">
          <h2 className="text-2xl">
            <label>Password </label>
          </h2>
          <input
            type="password"
            className=" border-2 rounded-2xl w-[20%] h-10 text-center"
            name="password"
            id="password"
          />
        </div>
        <div className="p-4">
          <button className="w-[40%] hover:bg-gray-500 text-2xl ">
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </div>
        <div>
          {!isSignup && (
            <Link to="/user/signup" className="hover:text-white no-underline">
              Don't have an account ? Click to Signup
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

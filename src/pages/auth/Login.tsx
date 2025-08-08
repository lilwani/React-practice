import React from 'react';
import { Form, Link } from 'react-router-dom';

interface ILoginIn {
  isSignup: boolean;
  children?: React.ReactNode;
}

export default function Login({ isSignup }: ILoginIn) {
  return (
    <div className="max-w-screen m-4 border-2 rounded-2xl bg-gray-800 grow">
      <Form className="flex flex-col justify-center m-auto">
        <div className="flex flex-row justify-center gap-6 p-4 ">
          <h2 className="text-2xl">
            <label> Username</label>
          </h2>
          <input
            type="text"
            className=" w-[20%] border-2 rounded-2xl h-10 text-center"
          />
        </div>
        <div className="flex flex-row justify-center gap-6 p-4">
          <h2 className="text-2xl">
            <label>Password </label>
          </h2>
          <input
            type="password"
            className=" border-2 rounded-2xl w-[20%] h-10 text-center"
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
      </Form>
    </div>
  );
}

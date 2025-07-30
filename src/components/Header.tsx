import React from 'react';
import Logo from './Logo';
import User from '../pages/user/User';

export default function Header() {
  return (
    <div className="m-4 px-6 py-2 rounded-2xl border-2 h-[70px] border-white flex justify-between">
      <Logo />
      <User />
    </div>
  );
}

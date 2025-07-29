import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainPage() {
  return (
    <div>
      <Sidebar />
      <Outlet/>
    </div>
  );
}

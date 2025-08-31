import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import ViewItem from '../pages/todos/ViewItem';
import Items from '../pages/todos/Items';

export default function Dashboard() {
  return (
    <div className="grow flex flex-row h-full">
      <Sidebar />
      <Outlet />
      {/* <ViewItem /> */}
    </div>
  );
}

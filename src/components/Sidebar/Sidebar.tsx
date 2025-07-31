import React from 'react';
import SidebarTodoList from './SidebarTodoList';
import SidebarDeletedTodo from './SidebarDeletedTodo';
import SidebarArchiveTodo from './SidebarArchiveTodo';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function Sidebar() {
  return (
    <div className="max-w-[25%] basis-[25%] m-4 rounded-xl border-2 border-white flex flex-row justify-between">
      <div className="flex flex-col justify-between">
        <SidebarTodoList />
        <SidebarDeletedTodo />
        <SidebarArchiveTodo />
      </div>
      <div className="w-full flex flex-row justify-end">
        <PlusIcon className="w-15 h-15 mt-4 mr-4 text-white" />
      </div>
    </div>
  );
}

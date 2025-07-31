import React from 'react';
import SidebarTodoList from './SidebarTodoList';
import SidebarDeletedTodo from './SidebarDeletedTodo';
import SidebarArchiveTodo from './SidebarArchiveTodo';

export default function Sidebar() {
  return (
    <div className="max-w-[25%] basis-[25%] m-4 rounded-xl border-2 border-white flex flex-col justify-between p-4">
      <SidebarTodoList />
      <SidebarDeletedTodo />
      <SidebarArchiveTodo />
    </div>
  );
}

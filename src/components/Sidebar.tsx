import React from 'react';
import SidebarTodoList from '../pages/todos/SidebarTodoList';
import SidebarDeletedTodo from '../pages/todos/SidebarDeletedTodo';
import SidebarArchiveTodo from '../pages/todos/SidebarArchiveTodo';

export default function Sidebar() {
  return (
    <div className="basis-1/4 m-4 rounded-xl border-2 border-white flex flex-col justify-between p-4">
      <SidebarTodoList />
      <SidebarDeletedTodo />
      <SidebarArchiveTodo />
    </div>
  );
}

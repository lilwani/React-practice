import React from 'react';
import SidebarTitle from './SidebarTitle';
import SidebarAllTodos from './SidebarAllTodos';

export default function SidebarTodoList() {
  return (
    <div className="basis-8/12 flex-grow-0 flex-shrink-0">
      <SidebarTitle />
      <SidebarAllTodos />
    </div>
  );
}

import React from 'react';
import SidebarTitle from './SidebarTitle';
import SidebarAllTodos from './SidebarAllTodos';

export default function SidebarTodoList() {
  return (
    <div className="basis-2/12 m-4 text-xl ">
      <button className="float-left border-2 border-white rounded-xl">
        SidebarAllTodos
      </button>
    </div>
  );
}

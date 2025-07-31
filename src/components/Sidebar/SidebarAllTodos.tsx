
import React from 'react';
import SidebarItem from './SidebarItem';

export default function SidebarAllTodos() {
  return (
    <div>
      <ul>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index} className="border-b-1 border-gray-200 p-2">
            <SidebarItem count={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

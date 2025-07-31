import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

export default function SidebarTitle() {
  return (
    <div className="flex flex-row">
      <p className="basis-1/3 text-2xl mb-4">My Todo's</p>
      <span className="justify-end basis-2/3 flex flex-row">
        <PlusCircleIcon className="inline w-10 h-10 ml-2" />
      </span>
    </div>
  );
}

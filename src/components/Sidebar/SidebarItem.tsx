import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface SidebarItemProps {
  count: number;
}

export default function SidebarItem({ count }: SidebarItemProps) {
  return (
    <div className="flex flex-row justify-between items-center p-2rounded-lg hover:bg-gray-500 transition-colors cursor-pointer">
      <span className="truncate w-[85%] overflow-hidden">
        ugyuijjf999999999hjjjjjjj9999{count + 1}
      </span>
      <span className="float-right text-red-500">
        <XMarkIcon className="inline w-5 h-5" />
      </span>
    </div>
  );
}

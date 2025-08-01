import React from 'react';
import { Button, Card } from 'flowbite-react';

export default function Items() {
  return (
    <div className="basis-[75%] w-[75%] ml-1 mr-4 my-4 rounded-xl border-2 border-white flex flex-row flex-wrap bg-gray-900">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          className="bg-gray-800 text-white rounded-xl w-[20%] h-[40%] m-4 p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
          key={index}
        >
          <h3 className="text-2xl basis-[25%] font-bold tracking-wide text-white truncate w-[85%] h-[90%] overflow-hidden text-ellipsis">
            <span className="float-left ">Todo Items</span>
          </h3>
          <p className="font-normal text-gray-400 truncate w-[85%] h-[80%] text-wrap text-left overflow-hidden text-ellipsis ">
            Here you can manage your todo items. now this is just a placeholder
            text to show how it will look like. Adding another line to make it
            more realistic. And after this line I need to clip it. Just to show
            how it will look like.
          </p>
        </Card>
      ))}
    </div>
  );
}

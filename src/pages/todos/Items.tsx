import React from 'react';
import { Card } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllTodos } from './todoSlice';

export default function Items() {
  const { userId } = useParams();
  const allTodos = useSelector(getAllTodos);

  return (
    <div className="basis-[75%] w-[75%] ml-1 mr-4 p-4 rounded-xl border-2 border-white bg-gray-900 flex flex-row flex-wrap overflow-y-auto max-h-full content-start">
      {allTodos?.map((todoItem) => (
        <Link
          to={`/user/${userId}/${todoItem.todoID}`}
          key={todoItem.todoID}
          className="w-[20%] m-4 no-underline"
        >
          <Card className="bg-gray-800 text-white rounded-xl min-h-[200px] w-[95%] p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <h3 className="text-2xl font-bold tracking-wide text-white overflow-hidden truncate mb-2 basis-[25%]">
              {todoItem.title}
            </h3>
            <p className=" text-gray-400 font-normal w-full text-left overflow-hidden ">
              {todoItem.description}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}

// {Array.from({ length: 18 }).map((_, index) => (
//         <Link
//           to={`/user/${userId}/${index}`}
//           key={index}
//           className="w-[20%] m-4 no-underline"
//         >
//           <Card className="bg-gray-800 text-white rounded-xl min-h-[200px] w-[95%] p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
//             <h3 className="text-2xl font-bold tracking-wide text-white overflow-hidden truncate mb-2 basis-[25%]">
//               Todo Items
//             </h3>
//             {/* <p className="font-normal text-gray-400 overflow-hidden w-[90%] truncate basis-[75%]"> */}
//             <p className=" text-gray-400 font-normal w-full text-left overflow-hidden ">
//               Here you can manage your todo items. now this is just a
//               placeholder text to show how it will look like. Adding another
//               line to make it more realistic.
//             </p>
//           </Card>
//         </Link>
//       ))}

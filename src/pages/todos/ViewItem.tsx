import ReactDom from 'react-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneTodo, type TodosList } from './todoSlice';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'flowbite-react';

export default function ViewItem() {
  const { todoId } = useParams();
  const oneTodoItem = useSelector(getOneTodo(Number(todoId))) as
    | TodosList
    | undefined;
  const [openModal, setOpenModal] = useState<boolean>(true);

  if (!oneTodoItem) {
    return (
      <div className="flex justify-center items-center w-[100%] h-full text-2xl font-semibold">
        No items found in ViewItem component
      </div>
    );
  }

  console.log(`oneTodoItem is ${JSON.stringify(oneTodoItem)}`);
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    throw new Error('Modal root element not found');
  }

  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-gray-900 opacity-90 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()}>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>{oneTodoItem?.title}</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {oneTodoItem?.description}
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>,
    modalRoot
  );
}

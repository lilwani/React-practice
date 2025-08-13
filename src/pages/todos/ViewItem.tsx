import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneTodo } from './todoSlice';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'flowbite-react';

export default function ViewItem() {
  const { todoId } = useParams();
  const oneTodoItem = useSelector(getOneTodo(Number(todoId)));
  const [openModal, setOpenModal] = useState<boolean>(true);

  return (
    <div>
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
          {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

import React, { useState } from "react";
import AddTask from "./AddTask";
import Modal from "./Modal";

const TaskBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-[4rem] flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Add Tasks</p>
      </div>
      <div>
        <button
          onClick={handleOpenModal}
          className="bg-gray-600 text-white w-[2rem] h-[2rem] rounded-full"
        >
          +
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <AddTask handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default TaskBar;

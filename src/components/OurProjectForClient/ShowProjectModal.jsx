import React from "react";
import { Modal } from "flowbite-react";
// eslint-disable-next-line react/prop-types
function ShowProjectModal({ open, closeModalHandler, selectedProjectImg }) {
  return (
    <>
      <Modal show={open} onClose={closeModalHandler}>
        <Modal.Header>
          <div className="flex flex-col items-center">
            <h3>Our Creation</h3>
          </div>
        </Modal.Header>
        <Modal.Body className="scrollbar-w-[3px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <img src={selectedProjectImg} alt="project.png" className="w-full" />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ShowProjectModal;

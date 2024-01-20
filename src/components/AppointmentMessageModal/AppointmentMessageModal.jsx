import React from "react";
import { Modal } from "flowbite-react";
import AppointmentForm from "./AppointmentForm";
// eslint-disable-next-line react/prop-types
function AppointmentMessageModal({ open, closeModalHandler }) {
  return (
    <>
      <Modal show={open} onClose={closeModalHandler}>
        <Modal.Header>
          <div className="flex flex-col items-center">
            <h3>Book your appointment now</h3>
          </div>
        </Modal.Header>
        <Modal.Body className="scrollbar-w-[3px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <AppointmentForm closeModalHandler={closeModalHandler} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppointmentMessageModal;

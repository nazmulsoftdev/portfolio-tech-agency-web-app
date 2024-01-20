import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
// eslint-disable-next-line react/prop-types
function PriceingSelectModal({ open, closeModalHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Modal show={open} onClose={closeModalHandler}>
      <Modal.Header>
        <div className="flex flex-col items-center">
          <h3>Priceing</h3>
        </div>
      </Modal.Header>
      <Modal.Body className="scrollbar-w-[3px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div>
          <form className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Write your Message..."
                className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                rows={8}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit" gradientMonochrome="pink" pill>
                <p>Send Message</p>
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PriceingSelectModal;

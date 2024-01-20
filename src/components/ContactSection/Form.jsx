import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { usePostContactMessageMutation } from "../../features/api";
import { EmailValidation } from "../../../utils/EmailValidation";
import dateFormat from "dateformat";

import toast from "react-hot-toast";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [postContactMessage, { isLoading, isSuccess, isError, error }] =
    usePostContactMessageMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success", {
        position: "top-center",
        message: "Your message successfully sent",
      });
    } else if (isError) {
      toast.error("error", {
        position: "top-center",
        message: `${error?.message || error?.data || "Opps something went wrong"}`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError, isSuccess]);

  // reset message from

  const resetHandler = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
  
    if (EmailValidation(email)) {
      postContactMessage({
        name,
        email,
        phone,
        subject,
        message,
        times: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      });
      resetHandler();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
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
          <Button
            disabled={isLoading}
            type="submit"
            gradientMonochrome="pink"
            pill
          >
            <p>Send Message</p>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;

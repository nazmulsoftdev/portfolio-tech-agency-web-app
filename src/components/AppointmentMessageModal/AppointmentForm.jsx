import React, { useState, useEffect } from "react";
import { Button, Checkbox } from "flowbite-react";
import toast from "react-hot-toast";
import { usePostAppointmentRequestMutation } from "../../features/api";
import { EmailValidation } from "../../../utils/EmailValidation";
import dateFormat from "dateformat";
import CountryCodeInput from "./CountryCodeInput";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// eslint-disable-next-line react/prop-types
function AppointmentForm({ closeModalHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+880");
  const [phone, setPhone] = useState("");
  const [skype, setSkype] = useState("");
  const [subject, setSubject] = useState("d");
  const [message, setMessage] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [accessLocation, setAccessLocation] = useState(false);

  const [postAppointmentRequest, { isLoading, isSuccess, isError, error }] =
    usePostAppointmentRequestMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModalHandler();
      Swal.fire({
        title: "Thank you for your appointment request",
        text: "Our team is committed to assisting you, and we will reach out to you within the next 3 business days",
        icon: "success",
      });
    } if (isError) {
      toast.error("error", {
        position: "top-center",
        message: `${error?.message || error?.data ||"Opps something went wrong "}`,
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError, isSuccess]);

  useEffect(() => {
    if (accessLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [accessLocation]);

  // submit handler

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();

    if (EmailValidation(email)) {
      if (
        name !== "" &&
        email !== "" &&
        phone !== "" &&
        subject !== "" &&
        message !== ""
      ) {
        postAppointmentRequest({
          name,
          email,
          phone: `${phoneCode}:${phone}`,
          skypeID: skype !== "" ? skype : "Empty",
          subject,
          message,
          times: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
          latitude,
          longitude,
        });
      }
    }
  };

  // Allow location handler request
  const allowLocationHandlerRequest = () => {
    // if (accessLocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //     setAccessLocation(true);
    //   });
    // }
    setAccessLocation(!accessLocation);
    console.log(accessLocation);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
          {/* Name Section */}
          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-baseline space-x-2 text-[#888B93]">
              Name <span className="text-sm text-[#ff6b6b]"> *</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Email Section */}
          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-baseline space-x-2 text-[#888B93]">
              Email <span className="text-sm text-[#ff6b6b]"> *</span>
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* Phone Section */}
        <div className="flex flex-col justify-center space-y-2">
          <label className="flex items-baseline space-x-2 text-[#888B93]">
            Phone Number <span className="text-sm text-[#ff6b6b]"> *</span>
          </label>
          <div className="flex items-center">
            <CountryCodeInput
              phoneCode={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            />
            <input
              type="number"
              required
              className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        {/* Skype Section */}
        <div className="flex flex-col justify-center space-y-2">
          <label className="flex items-baseline space-x-2 text-[#888B93]">
          Social link<span className="text-sm text-[#888B93]"> *</span>
          </label>
          <input
            type="link"
            className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
            value={skype}
            onChange={(e) => setSkype(e.target.value)}
          />
        </div>
        {/* Service Select Section */}
        <div className="flex flex-col justify-center space-y-2">
          <label className="flex items-baseline space-x-2 text-[#888B93]">
            {" "}
            Which service are you enquiring about?
            <span className="text-sm text-[#ff6b6b]"> *</span>
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
          >
            <option
              selected
              hidden
              value=""
              className="text-[#888B93]"
            ></option>
            <option value="Digital marketing">Digital marketing</option>
            <option value="Wordpress solution">Wordpress solution</option>
            <option value="Graphics design">Graphics design</option>
            <option value="Web design">Web design</option>
            <option value="Web development">Web development</option>
            <option value="App development">App development</option>
          </select>
        </div>

        {/* Message Section */}
        <div className="flex flex-col justify-center space-y-2">
          <label className="flex items-baseline space-x-2 text-[#888B93]">
            Write your Message<span className="text-sm text-[#ff6b6b]"> *</span>
          </label>
          <textarea
            type="text"
            className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
            rows={8}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {/* Location permission check box */}
        <div className="flex flex-row items-center space-x-3">
          <Checkbox
            value={accessLocation}
            onChange={allowLocationHandlerRequest}
            required
          />
          <label className="flex items-baseline space-x-2 text-[#888B93]">
            Allow Geolocation
            <span className="text-sm text-[#ff6b6b]"> *</span>
          </label>
        </div>
        <div className="w-full">
          <Button
            disabled={isLoading}
            type="submit"
            gradientDuoTone="purpleToBlue"
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;

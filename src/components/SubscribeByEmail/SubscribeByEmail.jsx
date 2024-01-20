import React, { useState, useEffect } from "react";
import styled from "./SubscribeByEmail.module.css";
import { Button } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EmailValidation } from "../../../utils/EmailValidation";
import { usePostSubscribeEmailMutation } from "../../features/api";
import toast from "react-hot-toast";
import dateFormat from "dateformat";
function SubscribeByEmail() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [subscribeEmail, setSubscribeEmail] = useState("");

  const [postSubscribeEmail, { isLoading, isSuccess, isError, error }] =
    usePostSubscribeEmailMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success", {
        position: "top-center",
        message: "Thanks for subscribe",
      });
    }
    if (isError) {
      toast.success("error", {
        position: "top-center",
        message: `${
          error?.message || error?.data || "Opps something went wrong"
        }`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError, isSuccess]);

  // subscribe email handler from

  const subscribeEmailFormHandler = (e) => {
    e.preventDefault();
    const now = new Date();
    if (EmailValidation(subscribeEmail)) {
      postSubscribeEmail({
        newsEmail: subscribeEmail,
        times: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      });
      setSubscribeEmail("");
    }
  };

  return (
    <section className="mt-[25px]" data-aos="fade-up-right">
      <div className={`${styled.bannerContainer}`}>
        <div className="w-full h-full  grid grid-cols-1 place-content-center place-items-center gap-5">
          {/* title */}
          <div className="flex flex-col justify-start md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center xl:flex xl:flex-col xl:justify-center xl:items-center">
            <h3 className="text-[#DF006B]">Get Started Instantly!</h3>
            <h3 className="text-[#DF006B] font-bold text-[30px] md:text-[35px] lg:text-[40px]">
              Get the only new update from this
            </h3>
            <h3 className="text-[#DF006B] font-bold text-[30px] md:text-[40px] lg:text-[40px]">
              newsletter
            </h3>
          </div>
          {/* Email Input*/}
          <div className=" w-full relative md:w-[70%] lg:w-[60%]">
            <form onSubmit={subscribeEmailFormHandler}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border-0 bg-[#F3F5FE] text-red-600 outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                required
              />
              <Button
                pill
                type="submit"
                gradientMonochrome="pink"
                className="absolute top-1 right-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeByEmail;

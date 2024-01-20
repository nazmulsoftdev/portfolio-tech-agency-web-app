import React from "react";
import Form from "./Form";
import ContactSocial from "./ContactSocial";

function ContactForm() {
  return (
    <section className="mt-20">
      <div className="w-full md:w-[90%] md:m-auto lg:w-[90%] lg:m-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10 ">
          {/* Contact Text */}
          <div className="w-full flex flex-col space-y-3">
            <h3 className=" text-[#C10059] font-bold text-[35px]">
              Get in Touch
            </h3>
            <p className="text-[15px] text-[#3c6382] leading-relaxed text-left">
              Goditect is a premier virtual IT firm specializing in developing
              MVPs and production-grade software.
            </p>
            <p className="text-[15px] text-[#3c6382] leading-relaxed text-left">
              If you have any queries about our service and your business, feel
              free to message us. We are ready to help you
            </p>
            {/* Social Link */}
            <ContactSocial />
          </div>
          {/* Form */}
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

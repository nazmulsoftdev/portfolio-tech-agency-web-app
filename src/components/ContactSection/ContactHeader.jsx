import React from "react";

import { BsFillTelephoneInboundFill as CallIcon } from "react-icons/bs";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { MdLocationOn as LocationIcon } from "react-icons/md";

import { motion } from "framer-motion";

function ContactHeader() {
  return (
    <section className="w-full md:w-[90%] md:m-auto lg:w-[90%] lg:m-auto">
      <div className="mt-20">
        <div className=" grid grid-cols-1 place-content-center place-items-center gap-4  md:grid md:grid-cols-1 md:place-content-center md:place-items-center md:gap-5 lg:grid lg:grid-cols-3 lg:place-content-center lg:place-items-center lg:gap-5">
          {/* Call Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-white shadow-lg flex items-start space-x-4 p-5 rounded-md hover:shadow-2xl"
          >
            <div className="p-3 border rounded-full ">
              <CallIcon size={20} className="text-[#DF006B] " />
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-[#202647] text-[20px] font-bold">
                Phone / Whatsapp
              </h3>
              <p className="text-[15px] text-[#3c6382]">(+880) 1634039367</p>
              <p className="text-[15px] text-[#3c6382]">(+880) 1935-615775</p>
            </div>
          </motion.div>
          {/* Email Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-white shadow-lg flex items-start space-x-4 p-5 rounded-md hover:shadow-2xl"
          >
            <div className="p-3 border rounded-full ">
              <EmailIcon size={20} className="text-[#DF006B]" />
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-[#202647] text-[20px] font-bold">E-mail</h3>
              <p className="text-[15px] text-[#3c6382]">
                nazmulislamador@gmail.com
              </p>
              <p className="text-[15px] text-[#3c6382]">
                nazmulislamsoftservice@gmail.com
              </p>
            </div>
          </motion.div>
          {/* Loaction info */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-white shadow-lg flex items-start space-x-4 p-5 rounded-md hover:shadow-2xl"
          >
            <div className="p-3 border rounded-full ">
              <LocationIcon size={20} className="text-[#DF006B]" />
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-[#202647] text-[20px] font-bold">Location</h3>
              <p className="text-[15px] text-[#3c6382]">
                Bangladesh, Savar dhaka
              </p>
              <p className="text-[15px] text-[#3c6382]">
                Road Code: 216,405.13
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;

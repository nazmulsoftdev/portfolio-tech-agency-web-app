import React, { useState, useEffect } from "react";
import { solutionData } from "../../utils/localDb";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
function ServiceItem() {
  const [ourSolution, setOurSolution] = useState([]);

  useEffect(() => {
    setOurSolution(solutionData);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mt-20" data-aos="fade-up-right">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <h3 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
          Our Solutions
        </h3>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-[#3c6382] text-[17px] leading-normal text-center ">
            Experience the unwavering excellence of our seasoned
            <br />
            design and development services.
          </p>
        </div>
        <motion.div className="w-full flex flex-col justify-center items-center space-y-10 md:w-[80%] md:m-auto md:grid md:grid-cols-2 md:gap-10 md:place-content-between md:place-items-center md:space-y-0  lg:w-[70%] lg:m-auto lg:grid lg:grid-cols-3 lg:gap-10 lg:place-content-between lg:place-items-center lg:space-y-0">
          {ourSolution?.map((item) => {
            const { id, name, image, content } = item || {};
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                key={id}
                className="flex flex-col justify-center items-center space-y-5 bg-[#ffffff] shadow-2xl p-10 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={image}
                    alt="logo"
                    className="w-[80px] p-2 flex justify-center items-center border-2 border-[#dff9fb] rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-[20px] font-bold text-[#3c6382]">
                    {name}
                  </h4>
                </div>
                <div className="w-full">
                  <p className="text-[#3c6382] text-[16px] text-left">
                    {content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceItem;

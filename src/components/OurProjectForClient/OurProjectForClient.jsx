import React, { useState, useEffect } from "react";
import { clientProjectList } from "../../../utils/localDb";
import ShowProjectModal from "./ShowProjectModal";
import { AiFillEye as ViewIcon } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
import styled from "./OurProjectForClient.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
function OurProjectForClient() {
  const [project, setProject] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProjectImg, setSelectedProjectImg] = useState("");

  useEffect(() => {
    setProject(clientProjectList);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // open modal handler

  const openModalHandler = (value) => {
    setOpen(true);
    setSelectedProjectImg(value);
  };

  // close modal handler

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mt-20" data-aos="zoom-in">
        <section className="w-full md:w-[80%] md:m-auto lg:w-[80%] lg:m-auto xl:w-[80%] xl;:m-auto">
          <div className="mb-10 flex justify-center items-center">
            <h3 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
              Our Projects For Client
            </h3>
          </div>
          <motion.div className="mt-10 w-full flex flex-col justify-center items-center space-y-10 md:w-[90%] md:m-auto md:grid md:grid-cols-2 md:gap-10 md:place-content-between md:place-items-center md:space-y-0  lg:w-[80%] lg:m-auto lg:grid lg:grid-cols-3 lg:gap-10 lg:place-content-between lg:place-items-center lg:space-y-0">
            {project?.map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className={`${styled.ProjectCardStyle} w-full relative hover:shadow-2xl `}
                >
                  <div className="w-full h-[300px] p-4 shadow-2xl relative">
                    <img
                      src={`${item.images}`}
                      alt="project"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <Tooltip content="View" placement="top-start">
                    <ViewIcon
                      size={35}
                      color="#2ed573"
                      className={`${styled.ViewIconSelect}`}
                      onClick={() => openModalHandler(item.images)}
                    />
                  </Tooltip>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
      <ShowProjectModal
        open={open}
        closeModalHandler={closeModalHandler}
        selectedProjectImg={selectedProjectImg}
      />
    </>
  );
}

export default OurProjectForClient;

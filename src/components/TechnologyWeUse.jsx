import React, { useState, useEffect } from "react";
import { technologyList } from "../../utils/localDb";
import { Tooltip } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
function TechnologyWeUse() {
  const [ourTech, setOurTech] = useState([]);

  useEffect(() => {
    setOurTech(technologyList);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="mt-20" data-aos="fade-up-right">
      <section className="w-full  md:w-[80%] md:m-auto lg:w-[70%] lg:m-auto xl:w-[80%] xl:m-auto">
        <div className="flex justify-center items-center">
          <h3 className="text-[#DF006B] font-bold  text-[30px] md:text-[40px] lg:text-[45px] xl:lg:text-[45px]">
            Technology We Used!
          </h3>
        </div>
        <div className="mt-20  grid grid-cols-3 place-content-center place-items-center gap-5  md:grid md:grid-cols-4 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-4 lg:place-content-center lg:place-items-center lg:gap-10">
          {ourTech?.map((item) => {
            const { id, image, name } = item || {};
            return (
              <div key={id}>
                <Tooltip content={name}>
                  <div className="w-[80px] h-[80px]">
                    <img src={image} alt="logo" width="100%" height="100%" />
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default TechnologyWeUse;

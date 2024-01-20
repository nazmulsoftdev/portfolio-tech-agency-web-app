import React, { useEffect } from "react";
import GraphicImg from "../../assets/banner/graphicImg.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DocumentTextFive = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-14" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10">
        {/* Image  => it will be hidden when user in small screen*/}
        <div className="hidden md:block lg:block">
          <img src={GraphicImg} alt="GraphicImg.png" className="w-full" />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col space-y-4">
          <div>
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              Graphic Design
            </h3>
          </div>
          <div className="w-full">
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              If you are in need of some amazing graphic design, then you have
              come to the right place! Our team of highly skilled and talented
              designers will work closely with you to create the perfect visuals
              for your project. We have experience with a wide range of design
              styles and can create custom graphics that fit your specific
              needs. Whether you need a new logo, a website design, or anything
              in between, we are here to help!
            </p>
          </div>
        </div>
        {/* Image  => it will be hidden when user in big screen*/}
        <div className="block md:hidden lg:hidden">
          <img src={GraphicImg} alt="GraphicImg.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextFive;

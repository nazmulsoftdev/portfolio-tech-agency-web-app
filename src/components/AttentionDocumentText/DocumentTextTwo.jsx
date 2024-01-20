import React, { useEffect } from "react";
import SoftwaredevelopmentImg from "../../assets/banner/softwareRequirementImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
const DocumentTextTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-14" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10">
        {/* Image  => it will be hidden when user in small screen*/}
        <div className="hidden md:block lg:block">
          <img
            src={SoftwaredevelopmentImg}
            alt="development.png"
            className="w-full"
          />
        </div>
        {/* Content */}
        <div className="w-full  flex flex-col space-y-4">
          <div className="TitleTextSmScreen md:TitleTextLgScreen lg:TitleTextLgScreen xl:TitleTextLgScreen">
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              Software requirement
            </h3>
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              Specification
            </h3>
          </div>

          <div className="w-full">
            <p className="text-[#3c6382] text-[16px] leading-relaxed text-left">
              Looking for a software requirements specification (SRS) service?
              Don’t worry! We offer a complete SRS service that will take your
              project from concept to completion. We’ll work with you to
              understand your needs and create a detailed specification that
              meets your requirements. Whether you’re looking to develop a new
              software application or improve an existing one, we can help.
              Contact us today to get started.
            </p>
          </div>
        </div>
        {/* Image  => it will be hidden when user in big screen*/}
        <div className="block md:hidden lg:hidden">
          <img
            src={SoftwaredevelopmentImg}
            alt="development.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextTwo;

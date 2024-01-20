import React, { useEffect } from "react";
import BusinessAnalyticImg from "../../assets/banner/businessAnalytica.png";
import AOS from "aos";
import "aos/dist/aos.css";

const DocumentTextOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-14" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10">
        {/* Content */}
        <div className="w-full flex flex-col space-y-4">
          <div className="TitleTextSmScreen md:TitleTextLgScreen lg:TitleTextLgScreen xl:TitleTextLgScreen">
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              Business requirements
            </h3>
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              documention
            </h3>
          </div>
          <div className="w-full ">
            <p className="text-[#3c6382] text-[16px] leading-relaxed text-left">
              If you are in need of business requirement documentation, our team
              can provide you with high quality and comprehensive service. We
              will work with you to understand your specific needs and
              requirements, and then create detailed documentation that will
              serve as a roadmap for your project. Our team has extensive
              experience in business requirement documentation, and we will
              ensure that your project is properly documented and ready to move
              forward.
            </p>
          </div>
        </div>
        {/*   Image*/}
        <div className="w-full">
          <img
            src={BusinessAnalyticImg}
            alt="businessAnalytic.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextOne;

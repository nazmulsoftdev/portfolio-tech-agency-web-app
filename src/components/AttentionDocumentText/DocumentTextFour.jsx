import React, { useEffect } from "react";
import MobileAppImg from "../../assets/banner/mobileappBanner.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DocumentTextFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-14" data-aos="fade-up-right">
      <div className="grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-10  lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-10">
        {/* Image  => it will be hidden when user in small screen*/}
        <div className="hidden md:block lg:block">
          <img src={MobileAppImg} alt="MobileAppImg.png" className="w-full" />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col space-y-4">
          <div>
            <h3 className="text-[30px] font-bold text-[#EF0178] md:text-[40px] lg:text-[40px]">
              App development
            </h3>
          </div>
          <div className="w-full">
            <p className="text-[#3c6382] text-[16px] leading-relaxed">
              We have a team of experienced developers who can turn your app
              idea into a reality. We provide everything you need to get
              started, including templates, tools, and support from our team of
              experts. Our service is affordable and scalable, so you can create
              as many apps as you need. So what are you waiting for? Get started
              today!
            </p>
          </div>
        </div>
        {/* Image  => it will be hidden when user in big screen*/}
        <div className="block md:hidden lg:hidden">
          <img src={MobileAppImg} alt="MobileAppImg.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default DocumentTextFour;
